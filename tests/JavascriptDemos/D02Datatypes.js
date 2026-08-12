/*
Datatype - Type of the data stored in the variable
Types
1. Premetive
    a. Number - Can hold any kind of +ve, -ve or decimal number
    b. String - Can hold string values (Combination of characters)
        eiter in '' or "" or ``
    c. Boolean - Holds true and false
    d. Null - holds nothing
    e. Undefined - the value is not defined yet
    f. BigInt - a very long number
    g. Symbol
2. Non premetive
    a. Object
    b. Arrays
*/

/*
Variable - A container which can hold the value
1. var - older approach
2. let - commonly used
3. const - can hold immutable value
*/

console.log("-------------- Number Data Type -------------");
let num1 = 56;
console.log("Number1 is: " + num1);
console.log("Data type: " + typeof num1);

let num2 = -85;
console.log("Number2 is: " + num2);
console.log("Data type: " + typeof num2);

let num3 = 8.6;
console.log("Number3 is: " + num3);
console.log("Data type: " + typeof num3);

console.log("------------ String data type -----------");
let sName = "Arun";
console.log("Name: " + sName);
console.log("Data Type: " + typeof sName);

let city = 'Banglore';
console.log("City: " + city);
console.log("Data type: " + typeof city);

/*let trainerInfo = `My name is Ankush.
I have completed 28 years in IT Industry.
I am ISTQB certified trainer`;
console.log("Information: " + trainerInfo);
console.log("Data type: " + typeof trainerInfo);
*/
//Template string / back tick string
let tName = "Madhavi";
let experience = 10;
let certificate = "TOSCA AS1"

let trainerInfo = `My name is ${tName}.
I have completed ${experience} years in IT Industry.
I am ${certificate} certified trainer`;
console.log("Information: " + trainerInfo);
console.log("Data type: " + typeof trainerInfo);

console.log("------------- Boolean Data type ----------------");
let isActive = true;
console.log("Is everyone active: " + isActive);
console.log("Data type: " + typeof isActive);

let isVideoOn = false;
console.log("Is everyone active: " + isVideoOn);
console.log("Data type: " + typeof isVideoOn);

console.log("------------ big Int Data type ---------------");
let num4 = 17976931348623157308n;
console.log("Number 4: " + num4);
console.log("Type of num4: " + typeof num4);

console.log("------------ Undefined Data type -----------");
let str;
console.log("Str: " + str);
console.log("Data type: " + typeof str);

console.log("-------------- Null Data type -------------");
let str2 = null;
console.log("Str2: " + str2);
console.log("Data type: " + typeof str2);


