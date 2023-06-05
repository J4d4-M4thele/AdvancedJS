/*******************CALL BACKS*******************
//concurrency means doing things at the same time 
function doSomething(callback) {
    callback();
}//function which takes argument
function sayHi() {
    console.log("Hi!");
}//function used as an argument
doSomething(sayHi);
//doSomething is the function which passes the sayHi function

function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You got an", grade, ": amazing!");
            break;
        case grade == "B":
            console.log("You got a", grade, ": well done!");
            break;
        case grade == "C":
            console.log("You got a", grade, ": alright.");
            break;
        case grade == "D":
            console.log("You got a", grade, ": hmmm...");
            break;
        default:
            console.log("An", grade, "! What?!");
    }
}

function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            console.log(score);
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    callback(grade);
}
getGrade(85, judge);
*/

/*******************EXERCISE 13.1*******************
function greet(fullName){
console.log(`Welcome, ${fullName[0]} ${fullName[1]}`)
}
function processCall(user, callback){
const fullName = user.split(" ");
callback(fullName);
}
processCall("Jada Mathele", greet);
*/


/*******************EXERCISE 13.2********************

const myPromise = new Promise(function(resolve,reject){
    resolve('Start Counting');
    //arrow functions automatically return the value
    //new Promise = function (resolve, reject)
})
//only goes to then once function is successful. else it goes to catch clause
.then(val => {
    console.log(val);
    return '1';
})
.then(val => {
    console.log(val);
    return '2';
})
.then(val => {
    console.log(val);
    return '3';
})
.then(val => {
    console.log(val);
})
//.then is a callback function
*/


/*******************ASYNC AND AWAIT*******************
function saySomething(x){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('something ' + x);
        },2000);
        //waits 2 seconds to execute functions
    });
}
//asyncronist function(await is only valid in these functions)
//asynchronist functions vs. synchronist
async function talk(x) {
    const words = await saySomething(x);
    //waiting for the saySomething function, waits for other promises
    console.log(words);
}
talk(2);
talk(4);
talk(8);
*/


/*******************EXERCISE 13.3********************/
let count = 0;
function timeOutput(a) {
    return new Promise(resolve => {
        setTimeout(() => {
            count++;
            resolve(`x value ${a} counter ${count}`);
        }, 1000);
    });
}
async function aCall(a) {
    console.log(`ready ${a} counter:${count}`);
    const res = await timeOutput(a);
    console.log(res);
}
for (let x = 1; x < 11; x++) {
    //runs it 3 times
    aCall(x);
}


/*******************CALL STACK AND CALLBACK QUEUE******************
//setTimeout IS A CALLBACK FUNCTION THAT GOES TO CALLBACK QUEUE
console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 1000);
//setTimeout(function,timeframe)
console.log(add(4, 5));
function add(x, y) {
return x + y;
}
//sorry I'm late gets displayed only one second after everything else has run
//It always shows last regardlessof time given.
*/





/*function addOne(val) {
    return val + 1;
}
function total(a, b, callback) {
    const sum = a + b;
    return callback(sum);
}
console.log(total(4, 5, addOne));


function checker(val) {
    return new Promise((resolve, reject) => {
        if (val > 5) {
            resolve("Ready");
        } else {
            reject(new Error("Oh no"));
        }
    });
}
checker(5)
.then((data) => { console.log(data); })
.catch((err) => { console.error(err); });
*/

//.finally(); runs irrespective of catching an error
/*function myFun() {
    return new Promise(resolve => resolve("Hello"));
}
myFun()
.then(
    function (val) { console.log(val); },
    function (err) { console.log(err); }
);*/


































































