// function sayHello() {
//     let you = prompt('What is your name?');
//     console.log('Hello', you + '!');
// }

/***********EXERCISE 6.1**********
let nr1 = Number(prompt('Type a number'));
let nr2 = Number(prompt('Type a number'));
//prompts parsed as numbers using the number class
function addNum(nr1, nr2){
    //adds numbers typed in
    let sum = nr1 + nr2;
    return sum;
}
let result = addNum(nr1, nr2);
console.log(result);
*/

//************EXERCISE 6.2***********
// let arr = ['pretty', 'outgoing', 'morbid', 'intelligent', 'funny'];
// function description() {
//     let fullName = prompt('What is your name?');
//     let randomWord = arr[Math.floor(Math.random()* arr.length)];
//     console.log(fullName + ' is very ' + randomWord);
// } 
// description();


/***********EXERCISE 6.3**********
let nr1 = Number(prompt('Type a number'));
let nr2 = Number(prompt('Type a number'));
let operator = prompt('Enter + or -');
let ans1 = 0;
function subtractAdd(nr1, nr2, operator) {
    if (operator === '-') {
         ans1= nr1 - nr2;
    }else if (operator === '+') {
         ans1 = nr1 + nr2;
    }
    console.log(nr1, operator, nr2, ' = ', ans1);
}
subtractAdd(nr1, nr2, operator)*/


/*********ADDING  DEFAULT VALUES TO FUNCTION PARAMETERS******* */
// function addTwoNumbers(x, y){
//     return x + y;
// }
/*let addTwoNumbers = (x, y) => x + y;
/*Always return something in a function 
let resultsArr = [];
for(let i = 0; i < 10; i ++){
let result = addTwoNumbers(5*i, i**2);
resultsArr.push(result);
}
console.log(resultsArr);

// let result = addTwoNumbers(4,5);
// console.log(result);

// addTwoNumbers(1,2,3,4);
//function ignores extra parameters




/**********ARROW FUNCTIONS******* */
//saved as a variable but can also be passed as a parameter
// let doingStuff = x => console.log(x);
// doingStuff('Hey');

// let addTwoNumbers = (x, y) => console.log(x + y);
// addTwoNumbers(22,79);

// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach( e => console.log(e));
//MUST PASS ARROW FUNCTION WHEN USING FOREACH METHOD

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very",
// "powerful"];
// console.log(message);
// //inserts elements of array


//SPREAD
/*function addFourNumbers(x , y, z, a){
 console.log(x + y + z + a);
}
let arr = [5, 9];
let arr2 = [6, 7];
addFourNumbers(...arr, ...arr2);
//multiple arrays can be inserted.


//REST
function someFunction(...param) {
    console.log(param);
}
someFunction("hi", "there!", "How are you?");*/


//RETURNING FUNCTIONS
/*let favoriteSubject = prompt("What is your favorite subject?");
console.log(favoriteSubject);*/




/*VARIABLES
let x = "global";
function doingStuff() {
let x = "local";
console.log(x);
}
doingStuff();
console.log(x);*/

//IMMEDIATELY INVOKED FUNCTIONS
//strings
// (function (fullName) {
//     console.log(fullName);
// })('Jada');
// //numbers
// (function (num1, num2) {
//     console.log(num1 + num2);
// })(200, 500);
// (function (fullName, petAge) { 
//     console.log(`${fullName} has a dog that is ${petAge} years old`);
// })('Norma',2);



/*****EXERCISE 6.5****
let num = '1000';
(function expression(){
    let num = '200';
    console.log(num);
}())

let result = (function() {
   let result= 1000;
   return result;
}());
console.log(result);
(function(num2) {
    num2= 3030;
    console.log(num2);
}(result))
*/

/******************RECURSIVE FUNCTIONS************* */

// function getRecursive(nr) {
//     console.log(nr);
//    if (nr > 0) {
//     getRecursive(--nr);
//     //decrements from nr
//     }
// }
// //calling function and passing a no. into it
// //getRecursive(3);
// getRecursive(10);
/*****************EXERCISE 6.6****************
function calcFactorial(num) {
    console.log(num);
    if (num === 0) {
        return 1;
        //0 factorial is one
    }
    else {
        return num * calcFactorial(--num);
    }
}
console.log(calcFactorial(4));
*/




// function logRecursive(nr) {
//     console.log(`Started function ${nr}`);
//     if (nr > 0) {
//         logRecursive(nr - 1);
//     }else {
//         console.log("done with recursion");
//     }
//     console.log(`Ended function: ${nr}`);
// }
// logRecursive(3);

// function calcFactorial(num) {
//     if (num > 0) {
//         factorial *= num;
//         calcFactorial(--num);
//     }
// }
// let factorial = 1;
// calcFactorial(Number(prompt('Enter a number to calculate the factorial for.')));
// alert(`factorial is ${factorial}`);

// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log("Not accessible:", z);
// }
// doOuterFunctionStuff(2);
//Gives reference erroe. can't call innerfunction outside of
//outer function. It's only in the scope of the outer function.


/*************************EXERCISE 6.7*********************** */

function countDown(start) {
    console.log(start);
    if (start < 1) {
        return;
    }else {
        countDown(--start);
    }
}
countDown(10);

function countDown2(start) {
    console.log(start);
    if (start > 0) {
        return countDown2(--start);
    }
}
countDown2(15);

// let anonymous = function (x) {
//     console.log('Today is going to be ', x);
// }
// anonymous('a good day');

// function affirm(y) {
//     console.log('Today is going to be ', y);
// }
// affirm('a good day');
// let functionVariable = function () {
//     console.log("Not so secret though.");
// };
// let toDoList = function (){
//     console.log("Wash dishes, do laundry, sweep floors");
// };
// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
// }
// doFlexibleStuff(toDoList);


// let youGotThis = function () {
//     console.log("You're doing really well, keep coding!");
// };
// setInterval(youGotThis, 10);
//10 000 milliseconds is 10 seconds, setIntervals(controls times)


/*************EXERCISE 6.8*****
const test = function (val) {
    console.log(val);
}
test('hello 1');
function test1(val) {
    console.log(val);
}
test1("hello 2");*/