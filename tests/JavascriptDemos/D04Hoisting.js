/*
Hoisting:
Hoisting is technique of JS where you can use/access any variable without declaration / 
or initilization.

Possible only with
var type
function declaration

Not possible with
let 
const 
anonymous fun
arrow fun

let and const variables are not hoisted because those are stored in TDZ (Temporal Dead Zone)
*/

console.log("Is Visible: " + isVisible);

var isVisible = true;
console.log("Is Visible: " + isVisible);

myFunction();

function myFunction(){
    console.log("This is my function!!!");    
}

myFunction();

//fun1();

let fun1 = function(){
    console.log("This is anonymous function!!!");
    
}
fun1();

//fun2();

let fun2 = ()=>{
    console.log("This is arrow function!!!");
    
}
fun2();