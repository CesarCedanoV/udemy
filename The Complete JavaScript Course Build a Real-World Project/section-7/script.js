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
function driversLicence5(passedTest){
    if (passedTest){
        var firstName5 = 'Cesar';
        var yearOfBirth5 = 1994;
    }
    console.log(firstName5+' born in '+yearOfBirth5+' is now officially allowed to drive a car.')
}
// driversLicence5(true);


// ES5
function driversLicence6(passedTest){
    if (passedTest){
        let firstName6 = 'Arlenys';
        const yearOfBirth6 = 1995;
    }
    console.log(firstName6+' born in '+yearOfBirth6+' is now officially allowed to drive a car.')
}
// driversLicence6(true);


///////////////////////////////
// Lecture: Blocks and IIFEs


// ES6
// {
//     console.log("Block");
// }


// // ES5
// (function(){
//     console.log("IIFE");
// })();

/////////////////////////////////
// Lecture: Destructing

// ES5
var cesar = ['Cesar',23];
var name = cesar[0];
var age = cesar[1];

// ES6 
{
let [name, age] = ['Cesar',23]
console.log(`${name} is ${age} years old.`)
}

let person = {
    firstName:`Cesar`,
    lastName:`Cedano`,
    career:`Developer`,
};

let {firstName:nombre,lastName:apellido,career:profesion} = person;
console.log(`${nombre} ${apellido} is ${profesion}.`)


{
    const calcAgeReteriment = (yearOfBirth) => {
        let age = new Date().getFullYear() - yearOfBirth;
        return [age, 40 - age];
    }   

    let [age, retirement] = calcAgeReteriment(1994);

    console.log(`I'm ${age} and i'll retired myself in ${retirement} years`);
}