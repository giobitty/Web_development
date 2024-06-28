/* SURVEY FORM*/
// collect components
const myform = document.querySelector(".myform")
// to collect the value directly move the const inside the eventLinstener and collected when the form is submitted
// const username = document.querySelector("#firstName")
const displayresult = document.querySelector(".displayResult")

// add events to the form

myform.addEventListener("submit", function(e){
    const username = document.querySelector("#firstName").value
    // selecting only the checked option
    const fav_language = document.querySelector("input[name='fav_language']:checked").value

    // to test if the data was collected we can set the preventDefault   
    // e.preventDefault()
    // displayresult.innerHTML = `Username: ${username} <br> Favorite Web Language: ${fav_language} `

    /*Save the data : username + fav language 
    to test it on the browser, Inspect and open 'Application' section from the dropdown
    */
    sessionStorage.setItem('firstname', username)
    sessionStorage.setItem('selection_language', fav_language)
    sessionStorage.setItem('product123', "Product name")
})

// SHOPPING CART
// collect the item
const itemname = document.querySelector(".itemname")
const itemdescription = document.querySelector(".itemdescription").textContent
const imgitam1 = document.querySelector("imgitem1").getAttribute('src')
const saleprice = document.querySelector(".saleprice").textContent
const formitem1 = document.querySelector(".formitem1")

formitem1.addEventListener("submit", function(){
    const quantityitem1 = document.querySelector(".itmqt").value

    // store the elements in sessionStorage
    sessionStorage.setItem('product_quantity',x)
    sessionStorage.setItem('product_name', itemname.textContent)
    sessionStorage.setItem('product_description', itemdescription.textContent)
    sessionStorage.setItem('product_img', imgitam1)

})

const priceitem_display = document.querySelector(".")