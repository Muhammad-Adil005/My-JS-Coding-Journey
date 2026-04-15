
// JS function is a block of code to perform the specific task.

// Write a JS function to add two numbers
// function sum(a,b){
//     return (a + b);
// }

// console.log(sum(10, 20));


// Write a program to print the marks of a student in an object using for loop

let marks = {
    adil: 10,
    ali: 95,
    waqas: 45,
    khatak: 67,
    tanveer: 78,
}

// for(let i=0; i<Object.keys(marks).length; i++){
//     console.log(`The marks of ${Object.keys(marks)[i]} is == ${marks[Object.keys(marks)[i]]}`);
// } 


// Do the above same question using for in loop

// for(let key in marks){
//     console.log(`The marks of ${key} is == ${marks[key]}`);
// }


// Write a function to fine mean of 5 numbers

// const mean = (a, b, c, d)=>{
//     return (a + b + c + d )/4;
// }

// console.log(mean(4, 5, 6, 7));



// Function help us to manage the code 

// let x = 20;
// let y = 30;

// console.log(`X + Y : `, x + y);


// This below is void function, The Drawback is that there is no return type the valeus will not be used outside this function.

function sum( x, y){ // initially it has no data type in parameters when using function inside javascript
   console.log(`The Addition of two values are : `, x + y);
}


sum(50, 50);
sum(100, 400);



// This below is return type function

function Multiply(a, b){
    return a * b;
}

var multiply = Multiply(10, 10);
console.log(`The Multiplication of two(2) values are  :`, multiply);

