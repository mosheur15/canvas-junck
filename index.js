'use strict'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const ratio = Math.ceil(window.devicePixelRatio)
let size = window.innerWidth

canvas.height = size * ratio
canvas.width = size * ratio
canvas.style.height = `${size}px`
canvas.style.width = `${size}px`
ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

function drawCircle(x, y, size){
    ctx.arc(x, y, size, 0, Math.PI*2)
    ctx.fill()
}

let mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('touchmove', function (event) {
    let tuch = event.touches[0]
    mouse.x = Math.ceil(tuch.clientX)
    mouse.y = Math.ceil(tuch.clientY)
})

function animate(){
    ctx.clearRect(0, 0, size, size)
    drawCircle(mouse.x, mouse.y, 0)
    requestAnimationFrame(animate)
}
animate()