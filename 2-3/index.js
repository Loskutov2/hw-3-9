const text = document.querySelector('#a')

const setIntervalId=setInterval(()=>{
    const color=Math.floor(Math.random()*16777215)
    text.style.color=`#${color}`
},150)

let score = 0

const block = document.querySelector('#b')
const setLocationId=setInterval(()=>{
    const left=Math.random()*100
    const top=Math.random()*100
    block.style.left=`${left}%`
    block.style.top=`${top}%`
    if (score===5) {
        console.log('score 5')
        clearInterval(setLocationId)
        text.textContent='WIN'
        block.removeEventListener('click', countScore)
    }},1000)

block.addEventListener('click', countScore)

function countScore() {
    score++
    text.textContent=score
}