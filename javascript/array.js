'use strict';


//Arrayπ

//1. Declaration

const arr1 = new Array();
const arr2 = [1,2];


//2. Index position
const fruits =['π','π'];
console.log(fruits);
console.log(fruits[1]);

//3. looping over an array
for(let i of fruits){
    console.log(i);
}

fruits.forEach((fruits) => console.log(fruits));
console.clear();
//4. Addrion, deletion, copy
//push : add an item to the end
fruits.push('π','π');
console.log(fruits);

//pop : remove an item from the end
fruits.pop();
console.log(fruits);

//unshift : add an item to the beginning
fruits.unshift('π','π');
console.log(fruits);

//shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

//note!! shift, unshift ar slower than pop, push

//splice : remove an item by index position
fruits.splice(1,2);
console.log(fruits);
fruits.splice(1,1,'π«','π');
console.log(fruits);

//combine two arrays
const fruite2= ['π₯','π'];
const newFruites = fruite2.concat(fruits);
console.log(newFruites);

// 5.Searching
//index of : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));

//includes : return T/F
console.log(fruits.includes('π₯­'));

// lastIndexOf(λ² μ΄μ μμμ€ νΉμ κ°μ κ°μ₯ λ§μ§λ§ λ°°μ΄μμΉ)
console.clear();
console.log(fruits);
fruits.push('π');
console.log(fruits.lastIndexOf('π'));




