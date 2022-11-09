const grid = document.querySelector('.gridContainer')

for (let i = 1; i <= 16*16; i++) {
    const content = document.createElement('div')
    content.setAttribute('class', 'gridContent')
    grid.appendChild(content)
}

