/*
Type Casting / Type Coercion
    Technique to convert any data type to another data type

Types
    1. Implicit Casting
        Conversion will be done automatically by JS itself
    2. Explicit Casting - forcefully casting
        can be done using 
        a. Number()
        b. String()
        c. Boolean()
---------------------------
Truthy & Falsy values
---------------------------
Truthy values
    Any string
    Any non zero number
    true
Falsy Values
    Any empty string
    0
    NaN
    Undefined
    false
    null
*/

console.log("----------- String Conversion -------------------");

let str1 = "Hello" + 10;
console.log("Value: " + str1 + " type: " + typeof str1);        //Hello10 String
/*
    while using + operator with string values 2nd value will be coerced into string
*/

let str2 = 100 + "100" + 55;
console.log("Value: " + str2 + " type: " + typeof str2);    //10010055

let str3 = 50 + 60 + "Hi";
console.log("Value: " + str3 + " type: " + typeof str3);    //110Hi
//First addition will be done and the answer will be coerced with string value

let str4 = "Pooja" + true + 50;
console.log("Value: " + str4 + " type: " + typeof str4);    //Poojatrue50
//true and 50 will be coerced with Pooja

console.log("--------------- Number Coercion -----------------");
let no1 = 100 + 100;
console.log("Value: " + no1 + " type: " + typeof no1);

let no2 = "100" + 100;
console.log("Value: " + no2 + " type: " + typeof no2);

let no3 = "100" - 20;
console.log("Value: " + no3 + " type: " + typeof no3);      //80 number
//This will convert "100" into number and then subtraction will happen

let no4 = "50" / "10";
console.log("Value: " + no4 + " type: " + typeof no4);
//Both "50" & "10" will be converted in to number and then division will happen

let no5 = "Hello" - 100;
console.log("Value: " + no5 + " type: " + typeof no5);
//Will trye to covert "Hello" into number but will fail and will give NaN as result

let no6 = "100" * 5 - 10;
console.log("Value: " + no6 + " type: " + typeof no6);
//Will convert "100" to number and then multipliation and subtraction will happen

let no7 = true - 10;
console.log("Value: " + no7 + " type: " + typeof no7);  //-9
//Will convert true into number ie 1 and then subtraction will happen

console.log("--------------- Explicit Casting -----------------");
/*
Explicit casting is done using functions / Objects like
Number()
String()
Boolean()
*/

let a1 = "100";
console.log(a1 + 200);
let strToNum = Number(a1);
//Will convert a1 to number explicitly
let ans = strToNum + 200;
console.log("Value: " + ans + " type: " + typeof ans);

let bill = "Your billing amount is 5000";
let amount = bill.split(" ")[4];
let amtNumber = Number(amount);
//This will convert string value of amount variable into number
console.log("Value: " + amount + " type: " + typeof amount);
console.log("Value: " + amtNumber + " type: " + typeof amtNumber);

console.log("----------------- String Conversion ---------------");
let str5 = 5000;
console.log("Value: " + str5 + " type: " + typeof str5);
let numToString = String(str5);
console.log("Value: " + numToString + " type: " + typeof numToString);

console.log("------------------- Boolean() Conversion -----------------");
let n4 = 0;
console.log("Value: " + n4 + " type: " + typeof n4);

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));


console.log(Boolean("Amita"));
console.log(Boolean(-8));


