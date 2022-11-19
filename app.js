// Global variables

let activeColor = "#eeeeee"
let bgColor = "#000000"
let activeSize = 16
let mode = "drawing"
let mouseDown = false

// Event Handlers

const sizePickerHandler = (e) => {
    e.target.value > 64
        ? activeSize = 64
        : activeSize = e.target.value
    generateGrid(activeSize)
}

const colorPickerHandler = (e) => {
    activeColor = e.target.value
    document.documentElement.style.setProperty('--pen-color', `${activeColor}`)
}

const bgColorPickerHandler = (e) => {
    bgColor = e.target.value
    document.documentElement.style.setProperty('--background-color', `${bgColor}`)
}

const clearHandler = () => {
    generateGrid(activeSize)
}

const toggleGridHandler = () => {
    const pixels = document.querySelectorAll('.gridContent')
    pixels.forEach(pixel=>{
        pixel.classList.toggle('grid')
        console.log(pixel)
    })
}

const gridColorPickerHandler = (e) => {
    console.log(e.target.value)
    document.documentElement.style.setProperty('--grid-color', `${e.target.value}`)
}

const editPixelHandler = (e) => {
    if (e.type === 'mouseover' && !mouseDown) return
    if (mode === 'drawing') {
        e.target.setAttribute('style', `background-color:${activeColor};`)
        e.target.classList.add('edited')
    }
}

const generateGrid = (activeSize) => {
    const grid = document.querySelector('.grid-container')
    grid.innerHTML = ''
    grid.setAttribute('style',`grid-template-rows: repeat(${activeSize}, 1fr);`)
    grid.setAttribute('style',`grid-template-columns: repeat(${activeSize}, 1fr);`)

    for (let i = 1; i <= activeSize*activeSize; i++) {
        const content = document.createElement('div')
        content.setAttribute('class', 'gridContent grid')
        content.addEventListener('mousedown', editPixelHandler)
        content.addEventListener('mouseover', editPixelHandler)
        grid.appendChild(content)
    }
}

// Event Listeners

document.querySelector('#colorPicker').addEventListener('input', colorPickerHandler)
document.querySelector('#bgColorPicker').addEventListener('input', bgColorPickerHandler)
document.querySelector('#sizePicker').addEventListener('input', sizePickerHandler)
document.querySelector('#clear').addEventListener('click', clearHandler)
document.querySelector('#toggle-grid').addEventListener('click', toggleGridHandler)
document.querySelector('#gridColorPicker').addEventListener('input', gridColorPickerHandler)
document.querySelector('.grid-container').addEventListener('pointerdown', (e) => {
    // e.preventDefault()
    mouseDown = true
})
document.querySelector('.grid-container').addEventListener('pointerup', () => (mouseDown = false))

// On page load

document.querySelector('body').addEventListener('load', generateGrid(activeSize))




   