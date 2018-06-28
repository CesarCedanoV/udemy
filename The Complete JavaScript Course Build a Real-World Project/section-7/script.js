////////////////////////////////
// Lecture: let and const

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5)

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6)

// ES5
// function driversLicence5(passedTest){
//     if (passedTest){
//         var firstName5 = 'Cesar';
//         var yearOfBirth5 = 1994;
//     }
//     console.log(firstName5+' born in '+yearOfBirth5+' is now officially allowed to drive a car.')
// }
// // driversLicence5(true);


// // ES6
// function driversLicence6(passedTest){
//     if (passedTest){
//         let firstName6 = 'Arlenys';
//         const yearOfBirth6 = 1995;
//     }
//     console.log(firstName6+' born in '+yearOfBirth6+' is now officially allowed to drive a car.')
// }
// driversLicence6(true);


///////////////////////////////
// Lecture: Blocks and IIFEs


// // ES6
// {
//     console.log("Block");
// }


// // ES5
// (function(){
//     console.log("IIFE");
// })();


/////////////////////////////////
// Lecture: Strings

// let firstName = 'Cesar';
// let lastName = 'Cedano';
// const yearOfBirth = 1994;

// function calcAge(year){
//     return 2018 - year;
// }

// // ES5
// console.log('ES5 ~ This is ' +  firstName + ' ' + lastName +'. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(`ES6 ~ This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith(`Ces`)); //should return true
// console.log(n.endsWith(`no`));  //should return true
// console.log(n.includes(`x`));   //should return false

// console.log(`${firstName}\n`.repeat(5));



////////////////////////////////////////
// Lecture: Arrow functions

const years = [1990,1994,2000,1970];

// ES5
var ages5 = years.map(function(element){
    return 2018 - element;
});
// console.log(ages5);

// ES6
let ages6 = years.map(element => 2018 - element);
console.log(ages6);

ages6 = years.map((element,index) => `Index: ${index+1} Value:${element}`);
console.log(ages6);

ages6 = years.map((element,index) => {
    let now = new Date().getFullYear();
    let age = now - element;
    return `Age: ${index}, Element: ${element}`;
});

console.log(ages6);