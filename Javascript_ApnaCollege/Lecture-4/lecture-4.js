// Arrays :> Collections of items
// In Array we can store different types of data but generally we can't prefer this. we store the same type of data within Array
// console.log("Arrays :> Collections of items");
// let students = ["Rahul", "Raj", "Ram"];
// console.log(students); // it will print the whole array
// console.log(students[0]); // it will print the value of ist index  Rahul
// console.log(typeof students); 

// Note :> Difference b/w Method and Property : Method perform some actions and property gives some values

// Type of Array is object its mean it is a type of object

// Note :> String vs Array : String is immutable and array is mutable. its means we can't change the value of Strig but we can change the value of array

// let students = ["Rahul", "Raj", "Ram", "Rohit", "Ramesh", "Ravi", "soh", "Sharma", "Kohli", "Babar", "Mir"];
// console.log(students.length);
// console.log(students[0]);
// console.log(students);

// for(let index = 0; index<students.length; index++){
//     console.log(students[index]);
// }


// Question:> For a given array with marks of students -> [85, 97, 55, 45, 12, 34] Find the average marks of entire class

// let marks = [85, 97, 55, 45, 12, 34];

// let sum = 0;
// for(let index of marks){    // This is for of loop
//     sum += index;
// }

// console.log(`Sum of marks of entire class :> ${sum}`);
// let average = sum/marks.length;
// console.log("Average marks of entire class :> " +average);


// Arrays methods :> Push() Pop() toString()


// Question : Create an array to store companies -> ["Infosys", "TCS", "Cognizant", "Wipro", "HCL"]

// 1) Remove first company from the array
// 2) Remove TCS and ADD FCS in it place
// 3) Add Amazon at the end
// 4) Print all companies

let companies = ["Infosys", "TCS", "Cognizant", "Wipro", "HCL"];
companies.shift(); // it will remove the first company from the Start
console.log(companies);
companies.splice(0, 0, "FCS"); // it will remove TCS and ADD FCS in it place
console.log(companies);
companies.push("Amazon");
console.log(companies);