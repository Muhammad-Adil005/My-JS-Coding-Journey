
// Call Back function O fuction hotay hay jisko aap koi aur dosra function as an argument pass krdety hain.


let sum = (q, r, callback)=>{
console.log(`sum of two numbers are : `, q + r);
callback(q, r);
}

let sub = (q, r, callback)=> {
    console.log(`sub of two numbers are : `, q - r);
}


sum(20, 10, sub);