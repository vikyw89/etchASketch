let activeColor = "#eeeeee"
let bgColor = "#000000"
let activeSize = 16
let mode = "drawing"

let mouseDown = false
window.addEventListener('mousedown', () => (mouseDown = true))
window.addEventListener('mouseup', () => (mouseDown = false))

const editPixel = (e) => {
    if (e.type === 'mouseover' && !mouseDown) return
    if (mode === 'drawing') {
        e.target.setAttribute('style', `background-color:${activeColor};`)
        e.target.classList.add('edited')
    } else if (mode === "copy") {
        const color = e.target.getAttribute('style').replace('background-color:','').replace(';','')
        activeColor = color
        colorPicker.setAttribute('value',`${activeColor}`)
        console.log(colorPicker)
        mode = "drawing"
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
        content.addEventListener('mousedown', editPixel)
        content.addEventListener('mouseover', editPixel)
        grid.appendChild(content)
    }
}

const resizeGrid = (e) => {
    e.target.value > 100
        ? activeSize = 100
        : activeSize = e.target.value
    generateGrid(activeSize)
}

const setActiveColor = (e) => {
    activeColor = e.target.value
    document.documentElement.style.setProperty('--pen-color', `${activeColor}`)
}

const setBgColor = (e) => {
    bgColor = e.target.value
    document.documentElement.style.setProperty('--background-color', `${bgColor}`)
}

const clearDrawing = () => {
    generateGrid(activeSize)
}

const toggleGridHandler = () => {
    const pixels = document.querySelectorAll('.gridContent')
    pixels.forEach(pixel=>{
        pixel.classList.toggle('grid')
        console.log(pixel)
    })
}

// Features

const colorPicker = document.querySelector('#colorPicker')
colorPicker.addEventListener('input', setActiveColor)

const bgColorPicker = document.querySelector('#bgColorPicker')
bgColorPicker.addEventListener('input', setBgColor)

const sizePicker = document.querySelector('#sizePicker')
sizePicker.addEventListener('input', resizeGrid)

const clear = document.querySelector('#clear')
clear.addEventListener('click', clearDrawing)

const toggleGrid = document.querySelector('#toggle-grid')
toggleGrid.addEventListener('click', toggleGridHandler)

window.addEventListener('load', generateGrid(activeSize))




   