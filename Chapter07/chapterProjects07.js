/***************************EMPLOYEE TRACKING APP*********************************
class Employees {
    //adding properties to class using constructor
    constructor (firstName, lastName, yearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}
Employees.prototype.setUp= function(){
    //using prototypeswe can 
    return this.firstName + ' ' + this.lastName + ' has worked for us for ' + this.yearsWorked + ' years.';
}
let employee1 = new Employees('Gabrielle', 'Adu', 14);
console.log(employee1.setUp());
let employee2 = new Employees('Sade', 'Union', 5);
console.log(employee2.setUp());*/



/*******************************MENU ITEMS PRICE CALCULATOR*********************************** 
let question = prompt('What do you want for lunch: Toasted Chicken Mayo, Chicken Schnitzel and Chips or Eisbein and Vegetables?');
class Menu {
    #item;
    #price;
    constructor(item, price) {
        this.#item = item;
        this.#price = price;
    }
    get item() {
        return this.#item;
    }
    set item(item) {
        this.#item = item;
    }
    get price() {
        return this.#item;
    }
    set price(price) {
        this.#price = price;
    }
}
let item1 = new Menu('Toasted Chicken Mayo', 55);
let item2 = new Menu('Chicken Schnitzel and Chips', 85);
let item3 = new Menu('Eisbein and Vegetables', 140);
console.log(item1);
console.log(item2);
console.log(item3);
function calculate() {
    if (question === item1) {
        return 'The total cost is ' + item1.price;
}else if(question === item2) {
    return 'The total cost is ' + item2.price;
}else {
    return 'The total cost is ' + item3.price;
}
   
}*/


class Menu {
    //declaring items which areon the menu
    #offer1 = 50;
    #offer2 = 70;
    constructor(val1, val2) {
        //how many items are being bought
        this.val1 = val1;
        this.val2 = val2;
    }
    calTotal() {
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }
    get total() {
        return this.calTotal();
    }
}
const val1 = new Menu(2, 0);
const val2 = new Menu(1, 3);
const val3 = new Menu(3, 2);
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);