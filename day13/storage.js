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
