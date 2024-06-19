// Monday 6/17 Events by Giorgia Beavers
// Onclick event
// Find the element
let btn1 = document.querySelector(".btn1")
// bound the click event to btn1
btn1.onclick = function(){
    alert("HEY THERE!")
}
//onmouseover event
document.querySelector(".linkqcc").onmouseout = () => {
    alert("QCC LINK WAS TOUCHED")
}
// Change Color div
let colorcontainer = document.querySelector(".colorcontainer")
let btncolor = document.querySelector(".btncolor")

let randomcolor = function(){
    let redvalue = Math.floor(Math.random()*255)
    let greenvalue = Math.floor(Math.random()*255)
    let bluevalue = Math.floor(Math.random()*255)
    return `rgb(${redvalue},${greenvalue},${bluevalue})`
}

btncolor.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = randomcolor()
})
// olive color
let btnolive = document.querySelector(".btnolive")

btnolive.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "rgb(186,184,108)"
})
// orange color
let btnorange = document.querySelector(".btnorange")

btnorange.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "rgb(255,165,0)"
})
// reset
let btnreset = document.querySelector(".btnreset")

btnreset.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = "rgb(255,255,255"
})

// remove an item from list
let listfruits = document.querySelector("#listfruits")
listfruits.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase()==="li"){
        event.target.remove()
    }
})

// prevent default event
let visitqcc = document.querySelector(".visitqcc")
visitqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC website is off! Try later")
})
// scroll events
let content = document.querySelector(".content")
let btnscrollingright = document.querySelector(".btnscrollingright")
btnscrollingright.addEventListener("click", function(){
    window.scrollBy(100,0)
})

// photo gallery
let btnleft = document.querySelector(".btnleft")
let btnright = document.querySelector(".btnright")
let gallerycontainer = document.querySelector(".gallery-container")

btnleft.addEventListener("click",function(){
    gallerycontainer.scrollBy({
        top:0,
        left: -500,
        behavior:"smooth"
    })
})
btnright.addEventListener("click",function(){
    gallerycontainer.scrollBy({
        top:0,
        left: 500,
        behavior:"smooth"
    })
})
/**to top */

let gotop = document.querySelector(".gotop")
window.addEventListener("scroll",function(){
    let pxtop = window.scrollY;
    console.log(pxtop)
    if(pxtop >= 500){
        gotop.style.display = "block"
    }
    else{
        gotop.style.display = "none"
    }
})
