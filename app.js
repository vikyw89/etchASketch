const grid = document.querySelector('main')
const content = document.createElement('div')

for (let i = 0; i < 16*16; i++) {
    grid.appendChild(content)
}