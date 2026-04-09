const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

const widthWithoutScrollbar = document.documentElement.clientWidth;
const heightWithoutScrollbar = document.documentElement.clientHeight;


canvas.width = widthWithoutScrollbar
canvas.height = heightWithoutScrollbar


const image1 = new Image()
image1.src = "whitee.jpg"

let scannedImage;
let scannedData;

image1.onload = () => {
    ctx.drawImage(image1, 0, 0,canvas.width,canvas.height); 
    scannedImage = ctx.getImageData(0,0,canvas.width,canvas.height)
    scannedData = scannedImage.data
};

document.addEventListener("mousemove",(e)=>{
    modifyImage(e.x,e.y)
})

document.addEventListener("touchmove",(e)=>{
    modifyImage(e.touches[0].pageX,e.touches[0].pageY)
})

function modifyImage(x,y){
    let index = (y * widthWithoutScrollbar + x) * 4
    for (let i = 0; i < 20; i++) {
        if (scannedData.at(index) != undefined){
            scannedData[index + 3] = 0
            index += 4
        }
        
    }
    
    scannedImage.data = scannedData
    ctx.putImageData(scannedImage,0,0)
}