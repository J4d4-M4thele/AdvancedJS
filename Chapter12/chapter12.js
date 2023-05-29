/**********************REGULAR EXPRESSIONS*************** 
let text = "I love JavaScript!";
console.log(text.match(/javascript/i));*/
/**i after match makes it case sensitive
let text2 = "I love React and JavaScript!";
console.log(text2.match(/javascript|nodejs|react/gi));
//g after string makes everything global returning matching values in an array
//match only findsone match*/

/**************CHARACTER OPTIONS************ */
//let text1 = "d";
//console.log(text1.match(/[abc]/));
//RETURNS NULL as it cannot find anything
// let text2 = "ad";
// console.log(text2.match(/[abcd]/gi/*global and case insensitive */));
// let text = "tRhbgDGB63y2300-";
// console.log(text.match(/[a-zA-Z0-9]/gi));
//whatever we're looking for can be put side by side separated by dashes to find everything within ranges

// let text3 = "äé!";
// console.log(text3.match(/./g));
//fullstop allows range to match any character (wildcard)

// let text = "Just some text.";
// console.log(text.match(/./g));
//outputs strings as array of letters
//use backslash t find punctuation or pronunciation marks

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g));
//only finds digits

// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g));
//finds only spaces


// let text = "In the end or at the beginning?";
// console.log(text.match(/\bin/gi));
//b looks for words at the beginning of something

// let text = "I love JavaScript!";
// console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

// let text1 = "You are doing great!";
// console.log(text1.match(/n?g/gi));
//n may be proceeded by a g

// let text2 = "123123123";
// console.log(text2.match(/(123)+/g));
//looking for matches or repetition any no. of times


// let text3 = "123123a";
// console.log(text3.match(/(123)*a/g));
//looking for 123 proceeding a 

// let text4 = "abcabcabc";
// console.log(text4.match(/(abc){1,2}/));
//{} looks for repetition once or twice



/***********************PRACTICAL REGEX*********** */
// let text = "That's not the case.";
// console.log(text.search(/Case/i));
//i ignoring whether its upper or lower case
//case matches in index 15 (shows first index of matching word)

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace(/Coding/g, "JavaScript"));
//.replace(what must be replaced, what to replace with)
//making coding global ensures alloccurances are replaced not just the first one
//if in quotes it'll only be thefirst one
//only changes output. never the actual variable


/*********************EMAIL VALIDATION************
let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
let validEmail = "maaike_1234@email.com";
let invalidEmail = "maaike@mail@.com";
console.log(validEmail.match(emailPattern));
console.log(invalidEmail.match(emailPattern));
//should give us null as its invalid */

/*****************************FUNCTIONS AND ARGUMENTS******************* 
function test(a, b, c) {
    a = "nice";
    arguments[1] = "JavaScript";
    console.log("first:", a, arguments[0]);
    console.log("second:", b, arguments[1]);
    console.log("third:", c, arguments[2]);
}
test("fun", "js", "secrets");*/


/*****************************EXERCISE 12.3******************* 
let last = lastOf(4, 12, 90, 77, 888);
console.log(`The last argument is ${last}`);
function lastOf() {
    let lastOne = '';
    for (let i = 0; i < arguments.length; i++) {
        lastOne = arguments[i];
    }
    return lastOne;
}*/


/*****************************JS HOISTING******************
var x;
x = 5;
console.log(x);
//hoisting allows one to add something into variable that hasn't been created yet (only var allows that, let wouldn't)
x = 5;
console.log(x);
let x;
//let foolproofs things
*/

/*****************************USING STRICT MODE*****************
'use strict';
/*doesn't allow you to initialize something after you create it. it also shows
all errors and makes JS less forgiving (ensuring that we code correctly)
function sayHi() {
    let greeting = "Hello!";
    console.log(greeting);
}
sayHi();*/


/*****************************EXERCISE 12.4******************
let val = 5;
val += adder();
val += adder();
val += adder();
console.log(val);
function adder() {
    let counter = val;
    for (let i = 0; i < val; i++) {
        counter++;
    }
    return counter;
}*/



/*****************************ERROR HANDLING EXERCISE 12.5*****************
isNum(140);
isNum('xyz');
//passing arguments to a function
function isNum(val) {
    try {
        if(!isNaN(val)) {
            //isNaN is a function on it's own
            console.log('Is a number!');
            //if isNan is false
        }else {
            throw 'Not a number!';
            //if true(anumber wasnt passed)
        }   
    } catch (e){
      console.log(e)
      //display what the error is
    } finally {
        console.log(`Value we're checking for is ${val}`);
        //display what we're checking for
    }
}
*/

/***********JSON*****
let object= {
    "name" : "Malika",
    "age" : 50,
    "profession" : "programmer",
    //array within JSON
    "languages" : ["JavaScript", "C#", "Python"],
    "address" : {
    "street" : "Some street",
    "number" : 123,
    "zipcode" : "3850AA",
    "city" : "Utrecht",
    "country" : "The Netherlands"
    }
    //object within JSON
}
console.log(object);
//JSON is just notation so you can make an object
*/

/*****************************EXERCISE 12.8******************
let  hobbies= [
    {
        'hobbies' : ['crocheting', 'sewing', 'singing'],
        'creative' : true
    },
    {
        'hobbies' : ['coding', 'reading'],
        'creative' : false
    }
];
//using JSON format
function maker(){
    hobbies.forEach(e => {
        console.log(`${e.hobbies} : ${e.creative}`);
    });
    //prints values to console
}
maker();
*/

/*****************************EXERCISE 12.9******************
let myList = [{
    "name": "Learn JavaScript",
    "status": true
},
{
    "name": "Try JSON",
    "status": false
}
];
console.log(myList);
let newStr = JSON.stringify(myList);
//JSON stringify converts JSON object to a string
console.log(newStr);
let newObj = JSON.parse(newStr);
//console.log(newObj);
//JSON stringify converts JSON string to an object
newObj.forEach(e => {
    console.log(`${e.name} : ${e.status}`);
});
//prints values to console
*/

























































































