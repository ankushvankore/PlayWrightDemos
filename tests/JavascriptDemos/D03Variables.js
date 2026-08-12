/*
Variable - A container which can hold the value
1. var - older approach - Local & Global scope
2. let - commonly used - Local & Gloabal scope
3. const - can hold immutable value - Local & Globale scope
*/

console.log("------------ var technique -----------");
var str1 = "Banti";
console.log(str1);

console.log("------------ let technique ------------");
let str2 = "Vibhavari";
console.log(str2);

console.log("------------ const technique ------------");
const str3 = "Amita";
console.log(str3);
//str3 = "Priyanka";

function myFuntion(){
    console.log("Inside the function");
    
    console.log(str1);
    console.log(str2);
    console.log(str3);

    let str4 = "Arun";
    console.log(str4);
}
myFuntion();

//console.log(str4);

if(2 == 2){
    console.log("Inside the block");
    
    console.log(str1);
    console.log(str2);
    console.log(str3);
}

var myValue = 88;
console.log(myValue);

var myValue = 99;
console.log(myValue);

let checkValue = 33;
console.log(checkValue);

//let checkValue = 55;
checkValue = 77;
console.log(checkValue);

const pi = 3.142;
//pi = 99.9;
