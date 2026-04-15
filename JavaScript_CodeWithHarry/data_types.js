console.log('Data Types in Javascript');

// There are 7 types of Primitive Data Types in Javascripts

// NN SS BB U  (Primitive Data Types)

// Null
// Number
// Symbol
// String
// Boolean
// BigInt
// Undefined



// Non-Primitive Data Types are Objects


let a = null;
let b = 12;
let c = Symbol('This is a Symbol');
let d = "This is a String";
let e = true;
let f = BigInt("567");
let g = undefined;
let g1

// both g and g1 are undefined

console.log(a,  b, c, d, e, f, g, g1);



/// Objects in JS :> Objects are key-value pairs

const items = {
    "Adil": "Software Engineer",
    "Tanveer": true,
    "ali": "Bahadur",
    "fahad": 123,
    "danyal": undefined,
}

console.log(items);

console.log(items['Tanveer']);
console.log(items['Adil']);

// In python object are called dictionaries

// Program :> Write a javascript program to store name, phone number, and marks of a student using objects.

const student = {
    "name": "adil",
    "phone": 1234567890,
    "marks": 45,
}

console.log(student);


// Practice Questions 

// Q1:> Create a variable of type String and try to add number to it 

let val = "Shinwari";
let num = 100;
console.log(val + num);

// Q2:> used typeOf operator to check the data type of the last variables decalared

console.log(typeof val);
console.log(typeof num);

// Q3:> Create a const object in JS. Can you change it to hold a number later?

const number = {
    val: "Hello", // same as below
    // "val": 123, // its not mandotory to use double quotes on key of the object
}

// number = 123; // this will give an error because we are trying to change the value of a const variable

console.log(number);

// Q4 :> Try to add a new key to the const object in problem 3 were you able to do it?

const number1 = {
    val: "Hello", 
    harry: false,

}
console.log(number1);

number1["shub"] = "Shubam";

// we can add a new key to the const object also we can change the value of any key inside const object

console.log(number1);