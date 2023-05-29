/*let s = "Hello";
console.log(
    s.concat(" there!")
    .toUpperCase()
    .replace("THERE", "you")
    .concat(" You're amazing!")
);
let uri = "https://www.example.com/submit?name=maaike van putten";
//let encoded_uri = encodeURI(uri);
let encoded_uri = encodeURIComponent(uri);
//causes problems when encoding components
console.log('Encoded: ', encoded_uri);
//encoding fixes broken uri's by adding %20 between each space
//let decoded_uri = decodeURI(uri);
//console.log('Decoded: ', decoded_uri);*/


/*****************************EXERCISE 8.1************************
let uri = "How's%20it%20going%3F" ;
let encoded_uri = encodeURIComponent(uri);
console.log('Encoded: ', encoded_uri);
let decoded_uri = decodeURIComponent(uri);
console.log('Decoded: ', decoded_uri);
let uri2 = "http://www.basescripts.com?=Hello World";
let encoded_uri2 = encodeURIComponent(uri2);
console.log('Encoded: ', encoded_uri2);
let decoded_uri2 = decodeURIComponent(uri2);
console.log('Decoded: ', decoded_uri2);*/







/**********************PARSING NUMBERS**************** 
let str_int = "6";
//number is a string
let int_int = parseInt(str_int);
//string is parsed into an integer
console.log("Type of ", int_int, "is a ", typeof int_int);
console.log("Type of ", str_int, "is a ", typeof str_int);

let str_float = '7.6';
let int_float = parseInt(str_float);
//cuts off decimal places
console.log(int_float);

let str_binary = "0b101";
let int_binary = parseInt(str_binary);
//just converted 0 to a number
console.log(int_binary, typeof int_binary);

let str_nan = "hello!";
//can't convert letters
let int_nan = parseInt(str_nan);
console.log("Type of", int_nan, "is", typeof int_nan);*/


/*PARSE FLOAT**************************
let str_float = '7.6';
let float_float = parseFloat(str_float);
//converts string to no. incl. decimal 
console.log(float_float);
//can use parsefloat for any no. but is ideal for no.s with decimals.
let str_int = "6";
let float_int = parseFloat(str_int);
console.log("Type of", float_int, "is a ", typeof float_int);*/




/*********************EVALUATING JAVASCRIPT*********************** */
//Used in specific cases coz it can cause server to crash,find better approach
// function go(e) {
//     eval(e.value);
// }

/*let arr = ['singing', 'drawing', 'sewing', 'crocheting'];
function hobbies(a, i) {
    console.log('I enjoy: hobby ', i+1 /*for index to start at 1, a);
}
arr.forEach(hobbies);*/

/*************************FILTERING AN ARRAY**********************/
//returns false then true
/*let arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
    return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);*/

/*let arr1 = ['Jada', 'Kaden', 'Nadia', 'Nchadi', 'Sade']
function checkArr(e) {
    return typeof e === 'string';
    //returns booleans not elements of the array
}
let filterArr1 = arr1.every(checkArr);
console.log(filterArr1);*/


/**********************REPLACING PARTS OF AN ARRAY****************************** 
 variable.copywithin(index you wanna replace, what to replace it with, which index it should stop before)

let arr = ['grapefruit', 4, 'hello', 5.6, true];
arr.copyWithin(0, 3, 4);
console.log(arr);
//replaces from 5.6
arr.copyWithin(0, 3, 5);
//replaces from 5.6 to true or you can say arr.copywithin(0,3);
console.log(arr);*/


/*************************MAPPING ARRAY VALUES*************** 
let arr1 = [1, 2, 3, 4];
let mapped_arr1 = arr1.map(x => x  + 1);
//arrow function adds 1 to each index in array, doesnt need to be returned unless it isn't an arrow function
console.log(mapped_arr1);
//map loops through every element*/


/***************************EXERCISE 8.2(LAST METHOD)**********************
let people = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
"Laurence", "Mike", "Laurence", "Mike"];
let people2 = people.filter((value, index, array) => {
   console.log(value,index,array.indexOf(value));
   return array.indexOf(value) === index;
});
console.log(people2);
*/


/**********************EXERCISE 8.3*******************
let nrs = [1,2,3,4,5,6,7,8,9,10];
let mapped_nrs = nrs.map(i => i*2);
console.log(mapped_nrs);
//when mapping numbers it is best to use an arrow function*/



/*******************STRING METHODS*********** */
/*let result = 'Hello Javascritpt';
let arr_result = result.split(' ')
console.log(arr_result);
.split(delimeter), where to split to make new element
let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);


converting array to string= use join(default is commas)
let letters = ["a", "b", "c"];
let x = letters.join(' then ');
console.log(x);

let searchStr = "When I see my fellow, I say hello";
let pos= searchStr.search('fellow');
console.log(pos);
if it can't find it it'll return -1

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re);
let pos1 = poem.charAt(10);
console.log(pos1);*/


/******************SLICING**************** */
// let str = "Create a substring";
// let substr1 = str.slice(8);
// let substr2 = str.slice(0,6);
// console.log("1:", substr1);
// console.log("2:", substr2);
// /*****************REPLACE METHOD**************** */
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);

// let s3= 'hello hello';
// let new_s3= s3.replace('hello', 'oh')
// let new_s3s = s3.replaceAll('hello', 'oh')
// console.log(new_s3);
// console.log(new_s3s);



/*************************EXERCISE 8.4**********************
let tongueTwister = 'She sElls seA shElls on tHe sea shoRe';
console.log(casing(tongueTwister));

function casing(a) {
    a = a.toLowerCase();
    array= a.split(' ');
    let newArray = [];
    array.forEach(el => {
        let words = el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase();
        newArray.push(words);
    })
    return newArray.join(' ');
}
*/ 


/***************************EXERCISE 8.5****************************** */
/*let string = 'I love Javascript'.toLowerCase();
let arr = ['a', 'e', 'i', 'o', 'u'];
arr.forEach((e,i) => {
    string = string.replaceAll(e, i);
});
console.log(string);*/




/*************************NUMBER METHODS********************************** */
/*let x = 34;
console.log(isNaN(x));
console.log(!isNaN(x));

let x = 1.23456;
let newX = x.toFixed(3);
console.log(x + ' becomes ' + newX);*/




/**************************MATH METHODS ******************* */
/*let result = Math.sqrt(64);
console.log(result);

let result2 = 5**3;/*Math.pow(5, 3);
console.log(result2);

let x = 6.78;
let y = 5.34;
//ROUNDS DOWN
console.log("X:", x, "becomes", Math.round(x));
console.log("Y:", y, "becomes", Math.round(y));
//ROUNDS UP, be careful with this when using negatives (use floor instead)
/*console.log("X:", x, "becomes", Math.ceil(x));
console.log("Y:", y, "becomes", Math.ceil(y));*/



/********************EXERCISE 8.6******************
console.log(Math.PI);
let x = 5.7;
console.log(Math.ceil(x));
console.log(Math.round(x));
console.log(Math.floor(x));
// let min = 0;
// let max = 100;
// console.log(Math.floor(Math.random()) *100);
// console.log(Math.floor(Math.random()) *101);
for(let i=0; i <100; i++) {
    console.log(randomNum(1,100));
}
function randomNum(max,min) {
    return Math.floor(Math.random() * (max - min) + min)
}
*/


/**********DATE METHODS*************** 
let currentDate = new Date();
console.log(currentDate);
//using constructor
let currentDate2 = Date.now();
console.log(currentDate2); 
//returns date as a number and so does variable.parse method, use var.toLocaleDateString method
let stringDate = new Date('Sat Jun 05 2021 12:40:12 GMT+0200');
console.log(stringDate);
//returns the string in date format
//typing new date = new Date (year, month, day, hour, minute, second, millisecond) */


/***************EXERCISE 8.7**********************
let specificDate = new Date ('August 11, 2004');
console.log(specificDate);
let yearMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
let day = specificDate.getDate();
console.log('Day: ', day);
let year = specificDate.getFullYear();
console.log('Year: ',year );
let month = specificDate.getMonth();
console.log('Month: ', month);
console.log(specificDate.toDateString());
console.log(yearMonths[month]);
 */