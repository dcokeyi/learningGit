// Variable

// We could keywords like Let, var, const to defeine variables in JS.

let x = 50;
var y = 60;
const z = 80;

function practice() {
    var a = 2;
    console.log(a) // this will print 2

    if (true) {
        var a = 1
        console.log(a) // this will print 1
    }

    console.log(a)  // this will print 1
}

function letPractice() {
    let b = 2;
    console.log(b) // this will print 2

    if (true) {
        let b = 1
        console.log(b) // this will print 1
    }

    console.log(b)  // this will print 2
}

// operators

var c = 3;
var d = 4;

// console.log(c += d); // this will 7
// console.log(c -= d); // this will -1
// console.log(c *= d); // this will 12
// console.log(c /= d); // this will 3/4
// console.log(c %= d); // this will -1

// equality
const greeting = "1" // type string
const greeting1 = 1; // type num

// ==
// console.log(greeting == greeting1); // this will print true
// != not equal
// console.log(greeting != greeting1); // this will print false

// ===
// console.log(greeting === greeting1); // this will print false
// !==
// console.log(greeting !== greeting1); // this will print true

// increment operator ++
// let num = 0;
// console.log(num++) // this will print 2

// if and else statements
let samAge = 10;
let bettyAge = 15;

// if (samAge > bettyAge) {
//     // the code right here would run if the conditon is true
//     console.log("Sam is not older than betty")
// } else {
//     // if the if statement is false the else condition run
//     // this code will work
//     console.log("Betty is older")
// }

// else if statement
// if (samAge > bettyAge) {
//     // the code right here would run if the conditon is true
//     console.log("Sam is not older than betty")
// } else if (samAge < bettyAge) {
//     // the code right here would run if the conditon is true
//     console.log("Sam is younger")
// } else {
//     // if the if statement is false the else condition run
//     // this code will work
//     console.log("Betty is older")
// }

// Switch
//expression is equal to
// switch (4) {
//     case 0:
//         console.log(day = "Sunday");
//         break;
//     case 1:
//         console.log(day = "Monday");
//         break;
//     case 2:
//         console.log(day = "Tuesday");
//         break;
//     case 3:
//         console.log(day = "Wednesday");
//         break;
//     case 4:
//         console.log(day = "Thursday");
//         break;
//     case 5:
//         console.log(day = "Friday");
//         break;
//     case 6:
//         console.log(day = "Saturday");
//         break;
//     default:
//         console.log("value not found")
// }

// For loop example
const countries = ["canada", "usa", "france", "nigeria"]

// a) The creation of the indexer variable i.e set i = 0;
// b) The expression to evaluate before each loop.
// c) A statement to execute at the end of each loop, after the code within the block has 
// been executed. In this example, we increment the i variable by 1.

// for (let i = 0; i < countries.length; i++) {
//     // console.log(i);
//     // console.log(countries[i])
//     // console.log(i < countries.length)
//     if (countries[i] == "france") {
//         console.log("France is in the array")
//     }
// }

// Primitive Data types

//NUmbers
// let s = 7;
// let d = -7
// let e = 7.15

// String

// typeof is used to determine what type data a variable is
let string = '8'
let sentence = 'my name is prince'
let stringExample = "My is Divine but i am 10"
let stringExample2 = "My is Divine 'but' i am 10"

//Object
//Objects 
// Object are mutable
const person = {
    firstName: 'John',
    lastName: 'Hopkins',
    age: 65,
    country: "Canada",
    isAlive: true
}

// Access objects in JS
// console.log(person.firstName, person.country);

// Destructing i.e bring out properties from an object
// const { firstName, lastName, age } = person
// console.log(lastName)


//Nested Object
const persons = {
    firstName: 'John',
    lastName: 'John',
    age: 65,
    countries: {
        na: 'US',
        africa: "nigeria"
    },
    isAlive: true
}
// accessing nested objects
// console.log(persons.countries.africa)

// destructing nested objects
// const { countries } = persons;
// console.log(countries)
// const { na, africa } = countries
// console.log(africa)

// arrays
const animal = ["dog", 'cat', "rabbit"]
// accessing an array
console.log(animal[2])
const walmart = ["milk", 50, 'bread', 12]

//DOM Manipulation
//get elemnt with ID
// const myButton = document.getElementById("button");

// myButton.style.backgroundColor = "red"

// get an element an elemnt by classname
// const myClass = document.getElementsByClassName("content");
// console.log(myClass)

// myClass.style.color = "red";

//functions
// Using the function keyword
function dayDream() {
    // the code that will be excuted when the function is clicked or called
    console.log("active")
}

// dayDream();
// Arrow functions

// const dream = () => {
//     event.preventDefault();
//     // the code that will be excuted when the function is clicked or called
//     for (let i = 0; i < countries.length; i++) {
//         if (countries[i] == "france") {
//             console.log("france is in the array")
//             break;
//         }
//     }
// }

// const dreamArray = (array) => {
//     // the code that will be excuted when the function is clicked or called
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == "france") {
//             console.log("france is in the array")
//             break;
//         }
//     }
// }

// dreamArray(countries)

// Eventhandling
// clicking event

// const buttonClick = document.getElementById("button");

// buttonClick.onclick = dream;


// Working with API's using Javascript fetch
// console.log(fetch("https://dummyjson.com/products/1"))
// fetch("https://dummyjson.com/products/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


// Local Storage
// fetch("https://dummyjson.com/products/1")
//     .then(response => response.json())
//     // First param is a key and the second is the obj we want to store.
//     .then(data => localStorage.setItem("1", JSON.stringify(data)))
//     .catch(error => console.log(error))

// Local storage retrieve
// let info = localStorage.getItem("1")
// console.log(info)

// LocalStorage and Cache are both web storage mechanisms in browsers, but they serve different purposes:

// LocalStorage provides a larger storage capacity and persistent storage, while Cache offers temporary storage for caching network requests and responses. The choice between them depends on the specific use case and data storage requirements of your application.

// Session Storage
// fetch("https://dummyjson.com/products/1")
//     .then(response => response.json())
//     // First param is a key and the second is the obj we want to store.
//     .then(data => sessionStorage.setItem("1", JSON.stringify(data)))
//     .catch(error => console.log(error))

// let infoSession = sessionStorage.getItem("1")
// console.log(infoSession)

// Difference between local and session storage

// LocalStorage provides persistent storage that is shared across all tabs and windows, while SessionStorage offers session-specific storage that is limited to a single tab or window. The choice between them depends on your specific requirements for data persistence and scoping within your web application.

// Map function
// fetch("https://dummyjson.com/products/")
//     .then(response => response.json())
//     // First param is a key and the second is the obj we want to store.
//     .then(data => localStorage.setItem("1", JSON.stringify(data)))
//     .catch(error => console.log(error))

// let info = localStorage.getItem("1")
// let items = JSON.parse(info)
// console.log(items)

// destructure out products
// const { products } = items
// console.log(products)

// For loop
// for (let i = 0; i <= products.length; i++) {
//     console.log(products[i].brand)
// }

// const productsMaps = products.map(product => console.log(product.brand))








