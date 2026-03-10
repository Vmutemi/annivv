const celebration = document.querySelector(".celebration")

const emojis = ["🌹","🌸","💐","🌺"]

function createFlower(){

let flower = document.createElement("div")

flower.classList.add("flower")

flower.innerText = emojis[Math.floor(Math.random()*emojis.length)]

flower.style.left = Math.random()*100 + "vw"

flower.style.animationDuration = (3 + Math.random()*5) + "s"

celebration.appendChild(flower)

setTimeout(()=>{
flower.remove()
},8000)

}

setInterval(createFlower,300)