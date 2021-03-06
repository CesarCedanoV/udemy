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


/////////////////////////////
// Lecture: Immediately Invoked Function Expressions (IIFE)
/*function game(){
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
//console.log(score);

(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/
/////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge){
  var a = ' years left until retirement.';
  return function(yearOfBirth){
    var age = 2018 - yearOfBirth;
    console.log((retirementAge-age) + a);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(70);
var retirementRepDom = retirement(65);


retirementUS(1990);
retirementGermany(2000);
retirementRepDom(1994);

retirement(60)(1994);


function interviewQuestion(job) {
  return function (name) {
    if (job == 'designer') {
        console.log(name + ', can you please explain what UX design is?');
    }else if (job == 'developer') {
      console.log(name + ', which one is your main programming language?');
    } else {
        console.log('Hello ' +name + ', what do you do?');
    }
  }
}

interviewQuestion('developer')('Cesar');
*/

/////////////////////////////
// Lecture: Bind, call and apply
/*
var person1 = {
  name:'Cesar',
  age:23,
  job:'Developer',
  presentation: function(style,timeOfDay) {
    if (style == 'formal'){
      console.log('Good '+timeOfDay+', Ladies and gentlemen! I\'m '+this.name+' and i\'m '+this.age+' years old. And also i work as a '+this.job+'.');
    }else if(style == 'friendly'){
      console.log('Weoo! What\'s up? I\'m '+this.name+', i\'m a '+this.job+' and i\'m '+this.age+' years old. Have a nice '+timeOfDay+'.');
    }
  }
}

var person2 = {
  name:'Arlenys',
  age:21,
  job:'Doctor'
}


var person3 = {
  name:'Abimael',
  age:24,
  job:'Front-End'
}

 
person1.presentation('friendly','Morning');

person1.presentation.call(person2,'formal','afternoon');

// person1.presentation.apply(person3,['formal','night']);

var person3Formal = person1.presentation.bind(person3,'formal','morning');
person3Formal();



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

function isFullAge(limit,el) {
  return el >= limit;
}

var ages = arrayCalc(years,calculateAge);

var fullRepDom = arrayCalc(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullRepDom);
*/


/////////////////////////////
// Code Challenge


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function(){

  function Question(title,answers,correctAnswer){
    this.title = title;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };
  
  Question.prototype.displayQuestion = function(){
    console.log(this.title);
    for (let i=0; i < this.answers.length; i++){
      console.log(i + ' - ' + this.answers[i]);
    }
  };
  
  Question.prototype.checkAnswerr = function(answer,callback){
    let sc;
    if (answer == this.correctAnswer){
      console.log('Correct answer!');
      sc = callback(true);
    }else {
      console.log('Incorrect answer, try again.');
      sc = callback(false);
    }
    this.displayScore(sc);
  };
  
  Question.prototype.displayScore = function(score){
    console.log('Your current score is:'+score);
    console.log('------------------------------------');
  }
  
  let questions = [
    new Question('Which is the largest country in the world?'
      ,['United States of America', 'Russia','Canada']
      ,1),
    new Question('What is the largest planet in our solar system?'
      ,['Jupiter','Earth','Sun']
      ,0),
    new Question('2 + 2 / 2?'
      ,['2', '4','3']
      ,2),
    new Question('What\'s my name?'
      ,['Cesar', 'Abimael','Arlenys']
      ,0)
  ];
         
  function score() {
    var sc = 0;
    return function(correct){
      if (correct) {
        sc++;
      }
      return sc;
    }
  };

  let  currentScore = score();

  function nextQuestion(){
    let randomIndex = Math.floor(Math.random() * questions.length);
    questions[randomIndex].displayQuestion();
    let selectedAnswer = prompt('Please select the correct answer');
    if (selectedAnswer != 'exit'){
      questions[randomIndex].checkAnswerr(parseInt(selectedAnswer),currentScore);
      nextQuestion();
    }else {
      console.log("End of the Game.")
    }
  }
  nextQuestion();
  
})();


