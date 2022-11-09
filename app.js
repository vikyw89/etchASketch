let activeColor = "white"
let bgColor = "black"
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
        mode = "drawing"
    }

}

const generateGrid = (activeSize) => {
    const grid = document.querySelector('.gridContainer')
    grid.innerHTML = ''
    for (let i = 1; i <= activeSize*activeSize; i++) {
        const content = document.createElement('div')
        content.setAttribute('class', 'gridContent')
        content.setAttribute('style', `background-color:${bgColor};`)
        content.addEventListener('mousedown', editPixel)
        content.addEventListener('mouseover', editPixel)
        grid.appendChild(content)
    }
    grid.setAttribute('style',`grid-template-rows: repeat(${activeSize}, 1fr);`)
    grid.setAttribute('style',`grid-template-columns: repeat(${activeSize}, 1fr);`)
}

const resizeGrid = (e) => {
    e.target.value > 100
        ? activeSize = 100
        : activeSize = e.target.value
    generateGrid(activeSize)
}

const setActiveColor = (e) => {
    activeColor = e.target.value
}

const setBgColor = (e) => {
    bgColor = e.target.value
    const grid = document.querySelectorAll('.gridContent')
    grid.forEach(content => {
        if (content.classList.contains('edited')) {
            return
        } else {
            content.setAttribute('style', `background-color:${bgColor};`)
        }
    })
}

const clearDrawing = () => {
    generateGrid(activeSize)
}

const copyColor = () => {
    mode = "copy"
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

const copy = document.querySelector('#copyColor')
copy.addEventListener('click', copyColor)

window.addEventListener('load', generateGrid(activeSize))




   