/*
Operators:
Are the symbols those are going to perform some operation

1. Unary Operators (Single Operand)
    ++, --, -, !, typeof
2. Binary Operators (Two Operands)
    a. Arithmatic Operators
        +, -, /, *, %
    b. Logical Oprators
        && (and), || (or), ! (not)
    c. Conditional Operators
        >, >=, <, <=, == (Loose equality), === (Strict equality), !=
3. Ternary Operators (Three Operands)
    ?:
*/

//Arithmatic Operators
console.log("------------ Arithmetic Operators -------------");

let no1 = 20
let no2 = 30;
console.log("Addition: " + no1 + no2);  //Addition: 1020
console.log("Addition: " + (no1 + no2));
console.log("Subtraction: " + (no1 - no2));
console.log("Multiplication: " + (no1 * no2));
console.log("Division: " + (no1 / no2));
console.log("Reminder: " + (no1 % no2));

console.log("Hi" + 10);
console.log("10" + 10);
console.log("Hi" * 10);     //NaN (Not a Number)

console.log("------------- Conditional Operators ------------");

let no3 = 78, no4 = 88;
console.log("no3 > no4: " + (no3 > no4));
console.log("no4 > no3: " + (no4 > no3));
console.log("no3 >= no4: " + (no3 >= no4));
console.log("no4 >= no3: " + (no4 >= no3));

console.log("no3 < no4: " + (no3 < no4));
console.log("no4 < no3: " + (no4 < no3));
console.log("no3 <= no4: " + (no3 <= no4));
console.log("no4 <= no3: " + (no4 <= no3));

console.log(no3 != no4);

console.log("---------- Strict and Loose equality ----------");
console.log(10 == 10);
console.log("10" == 10);    //True - Loose equality
console.log("Hi" == 10);    //False

console.log("10" === 10);   //false - Strict equality
//console.log("Hi" == Hi);    //Reference error

console.log("-------------- Unary Operators ------------");
let no = 9;
no++;       //Increment operator (will increment the variable by 1)
console.log(no);    //10

no--        //Decrement operator (will decrement the variable by 1)
console.log(no);    //9

console.log(no++);  //9
console.log(no);    //10

console.log(++no);  //11

let n1 = 70;
console.log("N1: " + n1);
let n2 = n1++;      //Post Increment - first operation and then increment
//console.log("N1: " + n1);
console.log("N2: " + n2);
let n3 = ++n1;      //Pre Increment - first increment and then operation
console.log("N1: " + n1);

    
console.log(n2);    
console.log(n3);    

console.log(!n1 == n3);

console.log("--------------------------------------");
console.log(9 / 0);     //Infinity
console.log(-8 / 0);    //-Infinity
console.log(false + 1); //1
console.log(true + 1);  //2
console.log(" " + 10);  // 10
console.log(undefined + 100);   //NaN   
console.log(true + true);       //2

console.log("--------------- Logial Operators --------------");
/*
c1          c2            && (AND)    || (OR)     ! (NOT)
true(1)     true(1)         true
ture(1)     false(0)        false
false(0)    true(1)         false
false(0)    false(0)        false
*/

let isOnRole = true;
let age = 30;

console.log("------------- && (and) Operator ------------");

console.log(isOnRole == true && age >= 30);
console.log(isOnRole == true && age > 30);
console.log(isOnRole == false && age >= 30);
console.log(isOnRole == false && age >= 50);

console.log("------------- || (OR) Operator ------------");

console.log(isOnRole == true || age >= 30); //true
console.log(isOnRole == true || age > 30);  //ture
console.log(isOnRole == false || age >= 30);//true
console.log(isOnRole == false || age >= 50);//false
