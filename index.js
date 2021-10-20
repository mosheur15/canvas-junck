'use strict'
// to cancel animation use cancelAnimationFrame
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const ratio = Math.ceil(window.devicePixelRatio)
let height = window.innerHeight
let width = window.innerWidth

canvas.height = height * ratio
canvas.width = width * ratio
canvas.style.height = `${height}px`
canvas.style.width = `${width}px`
ctx.setTransform(ratio, 0, 0, ratio, 0, 0)


let position = {
    x: 0,
    y: 0,
    deltaX: 0,
    deltaY: 0,
    size: 20
}

let move = {
    x: 0,
    y: 0,
}

function animate(){
    if(position.x===move.x&&position.y===move.y){
        cancelAnimationFrame()
    }
    if (position.x!==move.x){
        ctx.fillRect(position.x, position.y, position.size, position.size)
        position.x += position.deltaX
    }
    if (position.y!==move.y){
        ctx.fillRect(position.x, position.y, position.size, position.size)
        position.y += position.deltaY
    }
    requestAnimationFrame(animate)
}

function moveTo(x, y){
    move.x = x 
    move.y = y 
    position.deltaX = position.x > x? -1 : 1
    position.deltaY = position.y > y? -1 : 1
    animate()
}

canvas.addEventListener('click', (event)=>{
    moveTo(event.clientX, event.clientY)
})

ctx.fillRect(position.x, position.y, position.size, position.size)