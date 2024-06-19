console.log("Giorgia Beavers")
// select the  <div id="special">
let division = document.querySelector(".special")
console.log(division)

//// Changing the style of  <div id="special">

division.style.color = "red"
division.style.backgroundColor = "black"
division.style.textAlign = "center"

let s3 = document.querySelector(".s3")

//select the <span 3>
s3.style.color = "cyan"
s3.style.fontSize="30px"
s3.style.fontWeight = 900

//select the <span 4>
let s4 = document.querySelector(".s4")
s4.style.backgroundColor = "lime"
s4.style.padding = "10px"
s4.style.fontWeight = "900"


//change the text contain
s3.textContent = "30%"
s4.innerHTML = "OFF by <b><em>midnight</em></b>"

//className method

let spans = document.querySelectorAll(".special span")
spans[0].className = "changefontfamily"

//setAttribute method
// find the first <h1> element and we are going to set the class attribute 'title' to it
let title = document.querySelector("h1")
title.setAttribute("class", "styletitle")

let divmoreinfo = document.querySelector(".margininfo")
divmoreinfo.classList.remove("info")

//apend a text after <div>
let divspecial = document.querySelector(".special")
divspecial.append("New Information")


//////////////////////////////////////////////////////
//apend child to a new <li> to <ul class="to_do">
//step1 creat li element
let newitem = document.createElement("li")
// step2 give content to the new <li>
let newlist = document.createTextNode("Eat a lot of food")
newitem.appendChild(newlist)
// step3 append as child the newitem into the document 
// apend to <ul class="To_do"
let todolist = document.querySelector(".to_do")
todolist.appendChild(newitem)

///////////////////////////////////////////////



//remove an element using removechild method

todolist.removeChild(todolist.children[1])


//remove an element using remove method
//select the element that you want and use the the remove

todolist.children[0].remove()