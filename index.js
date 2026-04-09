const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

const widthWithoutScrollbar = document.documentElement.clientWidth;
const heightWithoutScrollbar = document.documentElement.clientHeight;


canvas.width = widthWithoutScrollbar
canvas.height = heightWithoutScrollbar

ctx.fillStyle = "black"
ctx.fillRect(0,0,canvas.width,canvas.height)

document.addEventListener("mousemove",(e)=>{
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.fillRect(e.x, 0, canvas.width/6, canvas.height)
    ctx.fill();

    ctx.globalCompositeOperation = "source-over";
    ctx.beginPath()
    ctx.fillRect(e.x-200,0,canvas.width/6,canvas.height)
    ctx.fillRect(e.x+200,0,canvas.width/6,canvas.height)
    ctx.fill()
})

document.addEventListener("click",()=>{
    ctx.fillRect(0,0,canvas.width,canvas.height)
})
