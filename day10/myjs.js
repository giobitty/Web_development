console.log("Giorgia Beavers")
// function print a message
function msg(){
    console.log("Hello World")}
msg()


// function print number from 1 to 3
function printcount(){
    for(let x = 1; x<=3; x++){
        console.log(x)}
}


//function that passes a name as agrument
function greeting(name){
    console.log(`Hello ${name}`)}
greeting("Giorgia")


// function that passes multiple arguments

let firstname = "Giorgia"
let lastname = "Beavers"

function fullname(firstname, lastname){
    console.log(`Welcome to JS ${firstname} ${lastname[0]}`)}

// function without parameters but returns a value
function sumxy(){
    let x = 10
    let y = 20
    return x+y
}

// function with parameters and returns a value
function sum(x,y){
    return x+y
}


//function check if the a number is positive or negative
function checknumber(x){
    if(x>0){
        console.log(`The number ${x} is positive`)}
    else if(x<0){
        console.log(`The number ${x} is negative`)}
    else if(x===0){
        console.log(`The number ${x} is zero`)}
    }

    // call the function

    let n =2
    let check = checknumber(n)
    console.log(`is number ${n} postive? ${check}`)


let car={
    make:"jeep",
    year:2021,
    model:"Wrangler",
    startmileage:10,
    endmileage:50,
    //behaviors (Method, function)
    accelerate: function(){return this.model},
    brake: function(){return this.make},
    distancetravel: function(){return this.endmileage - this.startmileage}
}



//  add a method 'start'

car.start = function(){
    return `${this.make} ${this.model} ${this.year}`
}

//add a propety `price`
car.price = 32000 

const addition = function(x,y){
    return x+y
}
//arrow function
const mult = (x,y)=> {return x*y}

//anonymous function
(
    function(){console.log("this is anonymous function")}
)();

(
()=>{console.log('this is an anonymous function using the arrow')}
)();