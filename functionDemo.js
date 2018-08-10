/**
 * 1) functions can be passed as parameter
 * 2) functions can be returned
 * 3) functions are assigned to variables
 */

function funOne()
 { 
     console.log(`First Functon`) 
 }
 funOne()

 let varOne = funOne 
 console.log(`${varOne}`)
let varTwo = function () {console.log(`fun2...`) }
console.log(`${varTwo}`)
let varThree = () => console.log(`This is lambda`)
