//Number Evaluating Game
// let min = 1;
// let max = 10;
// let dynamicNumber = Math.floor(Math.random() * (max - min) + min);
// console.log(dynamicNumber);
// let input = Number(prompt('Guess the dynamic number by entering a number between 1 and 10'));
// let response = '';
// if (input === dynamicNumber) {
//    response = 'You are correct ';
// } else  if (input > dynamicNumber) {
//     response = 'Your guess is too high.';
// }else {
//      response = 'Your guess is too low.';
// }
        
// alert(response + ` The dynamic number is ${dynamicNumber}.`);




//Friend Game
// let friends = [
//     Mpilo,
//     Tyeishia,
//     Nchadi,
//     Rocio,
//     Simphiwe
// ];
// let input = prompt('Enter your name.');
// let response = '';
// switch (friends) {
//     case 0:
//         input = friends;
//         response = 'Hello friend.'
//         break;
//     default: 
//         response = 'Unknown person';
//         break;
// }
// alert(response);


// for (let i = 0; i < 10; i++){
//     console.log(i);
//     if (i === 4) {
//         break;
//     }
// }

// let cars = [
//     {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     },
//     {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
//     },
//     {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
//     },
//     {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
//     }
// ];

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//         if (cars[i].color === 'black') {
//             console.log('I have found my car', cars[i]);
//             break;
//         }
//     }
// }

// for (let car of cars) {
//     if (car.color !== 'black') {
//         continue;
//     }
//     if (car.year >= 2020) {
//        console.log('We could get this one:', car);
//     }
// }

// let i = 1;
// while (i < 50) {
// i++;
// if ((i-1) % 2 === 0){
// continue;
// }
// console.log(i-1);
// }

// let i = 0;
// while (i < 50) {
//     i++;
//   if (i % 2 === 0){
//      continue;
//   }
//  console.log(i);
// }

//EASIER WAY
// for (i = 1; i < 50; i = i + 2) {
//     console.log(i);
// }

/****PRACTICE EXERCISE 5.8** 
let number = Number(prompt('Give a number to skip between 0 and 10'));
//[1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
let response = '';
for (let i = 0; i <= 10; i++) {
    if (i === number) {
        continue;
    }
    response += i;
}
console.log(response);*/

// let groups = [
//     ["Martin", "Daniel", "Keith"],
//     ["Margot", "Marina", "Ali"],
//     ["Helen", "Jonah", "Sambikos"],
// ];

// for (let i = 0; i < groups.length; i++) {
//    let matches = 0;

//     for(let j = 0; j < groups[i].length; j++) {
//         if (groups[i][j].startsWith('M')) {
//             matches++;
//         } else {
//             continue;
//         }

//      if (matches === 2){
//          console.log("Found a group with two names starting with an M:");
//          console.log(groups[i]);
//          break;
//         }
//     }
// }

// for (let group of groups) {
//     for (let member of group) {
//         if (member.startsWith("M")){
//             console.log("found one starting with M:", member);
//             break;
         
//         }  
//     }

// }
// outer:
// for (let group of groups) {
//     inner:
//     for (let member of group) {
//         if (member.startsWith("M")){
//             console.log("found one starting with M:", member);
//             break outer;
//             //breaks out of loop once inner loop condition 
//             //has been met once.
         
//         }  
//     }

// }


/*************EXERCISE 5.7(FOR IN LOOPS)*************** */
// let brand = {
//     name: 'Clover',
//     products: 'dairy',
//     NumberOfBases: 9
// }
// for (let el in brand) {
//     console.log(el,brand[el]);
// }

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
// };
// for (let key in car){
//     console.log(key);
// }
// let arrCar= Object.keys(car);
// console.log(arrCar);
// for (let a of Object.values(car)) {
//     console.log(car,car[a]);
// }