const grid = document.querySelector('.gridContainer')
let activeColor = "white"
let activeSize = 16

const brush = (e) => {
    console.log(e)
    e.target.setAttribute('style', `background-color:${activeColor};`)
}

const responsivePixels = () => {
    const pixels = document.querySelectorAll('.gridContent')
    pixels.forEach(pixel => {
        pixel.addEventListener('click', brush)
    })
}

const generateGrid = (activeSize) => {
    for (let i = 1; i <= activeSize*activeSize; i++) {
        const content = document.createElement('div')
        content.setAttribute('class', 'gridContent')
        grid.appendChild(content)
    }
    grid.setAttribute('style',`grid-template-columns: repeat(${activeSize}, 1fr); grid-template-rows: repeat(${activeSize}, 1fr);`)
    responsivePixels()
}

const removeGrid = () => {
    document
        .querySelectorAll('.gridContent')
        .forEach(el=> el.remove())
}

const reworkGrid = (e) => {
    activeSize = e.target.value
    if (activeSize > 100 ) {
        activeSize = 100
    }
    removeGrid()
    generateGrid(activeSize)
}


const setActiveColor = (e) => {
    activeColor = e.target.value
}

const colorPicker = document.querySelector('#colorPicker')
colorPicker.addEventListener('change', setActiveColor)


const sizePicker = document.querySelector('#sizePicker')
sizePicker.addEventListener('change', reworkGrid)

generateGrid(activeSize)



   