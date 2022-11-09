let activeColor = "white"
let activeSize = 16

const editPixel = (e) => {
    console.log(e)
    e.target.setAttribute('style', `background-color:${activeColor};`)
}

const generateGrid = (activeSize) => {
    const grid = document.querySelector('.gridContainer')
    grid.innerHTML = ''
    for (let i = 1; i <= activeSize*activeSize; i++) {
        const content = document.createElement('div')
        content.setAttribute('class', 'gridContent')
        content.addEventListener('mouseover', editPixel)
        grid.appendChild(content)
    }
    grid.setAttribute('style',`grid-template-rows: repeat(${activeSize}, 1fr);`)
    grid.setAttribute('style',`grid-template-columns: repeat(${activeSize}, 1fr);`)
}

const resizeGrid = (e) => {
    activeSize = e.target.value
    if (activeSize > 100 ) {
        activeSize = 100
    }
    generateGrid(activeSize)
}

const setActiveColor = (e) => {
    activeColor = e.target.value
}

const colorPicker = document.querySelector('#colorPicker')
colorPicker.addEventListener('input', setActiveColor)

const sizePicker = document.querySelector('#sizePicker')
sizePicker.addEventListener('input', resizeGrid)

generateGrid(activeSize)



   