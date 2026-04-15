
// we used loops to performed Repeated action. 

/* Difference b/w  For in / For Off Loops

// For In Loop :> loops through the key of the object
// For Off Loop :> loops through the value of the object

for(let i = 0; i<5; i++){
    console.log(i);
}


for(let num = 0; num<=20; num++){
    console.log(`The Result From ${num} are ${num}`);
}


// Program to add n natural numbers

let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for(let i = 0; i<n; i++){
    // sum = sum + i; // we can write the same like below
    sum += i;
}

console.log(`sum of ${n} natural numbers are ${sum}`);

*/
// For In Loop used to go through object using key  

let obj = {
    harry: 90,
    adil: 87,
    tanvver: 12,
    qasim: 45,
    waleed: 76,
}

// for(let a in obj){
//     // console.log(a);
//     console.log(`Marks of ${a} are ${obj[a]}`); // if we want to show all the objects values using the key of the object
// }

// For Of Loop


// for(let b of obj){ // this will give us an error obj is not iterable. so we can used for Of Loop with String or Arrays
for(let b of "Shinwari"){ 
    console.log(b);
}