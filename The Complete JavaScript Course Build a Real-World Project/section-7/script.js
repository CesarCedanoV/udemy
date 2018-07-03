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

// const years = [1990,1994,2000,1970];

// // ES5
// var ages5 = years.map(function(element){
//     return 2018 - element;
// });
// // console.log(ages5);

// // ES6
// let ages6 = years.map(element => 2018 - element);
// console.log(ages6);

// ages6 = years.map((element,index) => `Index: ${index+1} Value:${element}`);
// console.log(ages6);

// ages6 = years.map((element,index) => {
//     let now = new Date().getFullYear();
//     let age = now - element;
//     return `Age: ${index}, Element: ${element}`;
// });

// console.log(ages6);



///////////////////////////////////////////////
// Lecture: Arrow functios intermedie

// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         })
//     }
// }
// box5.clickMe();

// ES6
// const box6 = {
//     color: `blue`,
//     position: 2,
//     clickMe: () => {
//         document.querySelector(`.blue`).addEventListener(`click`, () => {
//             var str = `This is box number ${this.position} and it is ${this.color}`;
//             alert(str);
//         })
//     }
// }
// box6.clickMe();




// ES5
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.myFrinds5 = function(friends){
//     var arr = friends.map(function(element){
//         return this.name + ' is friends with ' + element;
//     }.bind(this));
//     console.log(arr);
// }
// var friends = ["Arlenys","Abimael","Ulloa"];
// new Person('Cesar').myFrinds5(friends);

// ES6
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.myFrinds6 = function(friends){
//     let arr = friends.map( element => `${this.name} is friends with ${element}`);
//     console.log(arr);
// }
// let friends = ["Arlenys","Abimael","Ulloa"];
// new Person('Cesar').myFrinds6(friends);


/////////////////////////////////
// Lecture: Destructing

// // ES5
// var cesar = ['Cesar',23];
// var name = cesar[0];
// var age = cesar[1];

// // ES6 
// {
// let [name, age] = ['Cesar',23]
// console.log(`${name} is ${age} years old.`)
// }

// let person = {
//     firstName:`Cesar`,
//     lastName:`Cedano`,
//     career:`Developer`,
// };

// let {firstName:nombre,lastName:apellido,career:profesion} = person;
// console.log(`${nombre} ${apellido} is ${profesion}.`)


// {
//     const calcAgeReteriment = (yearOfBirth) => {
//         let age = new Date().getFullYear() - yearOfBirth;
//         return [age, 40 - age];
//     }   

//     let [age, retirement] = calcAgeReteriment(1994);

//     console.log(`I'm ${age} and i'll retired myself in ${retirement} years`);
// }




//////////////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(current => {
//     current.style.backgroundColor = 'dodgerblue';
// });

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(current => {
    current.style.backgroundColor = `dodgerblue`;
});

// ES5  
// for(var i =0; i < boxesArr5.length; i++){
//     if (boxesArr5[i].className === 'box blue'){
//         continue;
//     }
//     
// }

// ES6
for (const current of boxesArr6){
    if (current.className.includes(`blue`)){
        continue;
    }
    current.textContent = 'I changed to blue';
}


var ages = [10,12,15,18,16,19];
// ES5
// var over18 = ages.map(function(current){
//     return current >= 18;
// });
// console.log(over18);
// console.log(over18.indexOf(true));
// console.log(ages[over18.indexOf(true)]);


// ES6
console.log(ages.findIndex(current => current >= 18));
console.log(ages.find(current => current >= 18));
*/