let activeColor = "white"
let activeSize = 16

let mouseDown = false
window.addEventListener('mousedown', () => (mouseDown = true))
window.addEventListener('mouseup', () => (mouseDown = false))

const editPixel = (e) => {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.setAttribute('style', `background-color:${activeColor};`)
}

const generateGrid = (activeSize) => {
    const grid = document.querySelector('.gridContainer')
    grid.innerHTML = ''
    for (let i = 1; i <= activeSize*activeSize; i++) {
        const content = document.createElement('div')
        content.setAttribute('class', 'gridContent')
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
    const hover = document
        .querySelector('.gridContent:hover')
        .setAttribute('style',`background-color:${activeColor};`)
    console.log(hover)
}

const colorPicker = document.querySelector('#colorPicker')
colorPicker.addEventListener('input', setActiveColor)

const sizePicker = document.querySelector('#sizePicker')
sizePicker.addEventListener('input', resizeGrid)

generateGrid(activeSize)



   