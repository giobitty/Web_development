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