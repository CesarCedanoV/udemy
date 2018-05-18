/////////////////////////////
// Lecture: Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/



/////////////////////////////
// Lecture: Object.create
/*
var personProto = {
  calculateAge: function(){
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);

john.name= 'John';
john.yearOfBirth=1994;
john.job = 'teacher';

var cesar = Object.create(personProto,
  {
    name: {value: 'Cesar'},
    yearOfBirth: {value: 1994},
    job: {value: 'Developer'}
});
*/


/////////////////////////////
// Lecture: Primitives vs Objects
/*
// Primitives
var x = 6
var y = x;
x = 69;
console.log(x);
console.log(y);

// Objects
var obj1 = {
  name : 'Cesar',
  age: 24
};

var obj2 = obj1;

obj1.name='Arlenys';
obj2.age = 30;
console.log(obj1.name);
console.log(obj2.name);



console.log(obj1.age);
console.log(obj2.age);



// Functions

var age = 27;
var obj = {
  name:'Jonas',
  city:'Lisbon'
};

function change(a,b) {
  a = 30
  b.city = 'Rep. Dom.'
};

change(age,obj);
console.log(age)
console.log(obj.city);
*/


/////////////////////////////
// Lecture: Passing functions as arguments
/*
var years = [1990,1994,1995,2000,2015];

function arrayCalc(arr, fn){
  var arrRes = [];
  for (var i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el){
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  }else {
    return -1;
  }
}
var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/



/////////////////////////////
// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
  if (job == 'designer') {
    return function(name){
      console.log(name + ', can you please explain what UX design is?');
    }
  }else if (job == 'developer') {
    return function(name){
      console.log(name + ', which one is your main programming language?');
    }
  } else {
    return function(name) {
      console.log('Hello ' +name + ', what do you do?');
    }
  }
}

var developerQuestion = interviewQuestion('developer');
developerQuestion('Cesar');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Abimael');

interviewQuestion('Doctor')('Arlenys');
*/
