/*class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let dog = new Dog('Daisy', 3, 'white', 'maltese');
console.log(dog.dogName, dog.weight, dog.color, dog.breed);

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    //method is inside class because it cannot work without a class
    greet() {
        console.log("Hi there!");
    }
    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
    }
}
let p = new Person();
let compliment = p.compliment("Harry", "hat");
console.log(compliment);*/

/*****************EXERCISE 7.1 + 7.2*************** 
class Person {
    firstName;
    lastName; /*always mention properties before constructor 
 constructor(firstName, lastName = 'Doe'/*default value assigned) {
     if (firstName.length > 1) {
         this.firstName = firstName;
     } else {
         alert('First name too short!')
     }
     if (lastName.length > 1) {
         this.lastName = lastName;
     } else {
         alert('Last name too short!')
     }
 }
//  get firstname() {
//      return this.#firstname;
//  }
//  set firstname(firstname) {
//      this.#firstname = firstname;
//  }
//  get lastname() {
//      return this.#lastname;
//  }
//  set lastname(lastname) {
//      this.#lastname = lastname;
//  }
 greet() {
     console.log("Hi there!", this.firstName, ' ' + this.lastName);
 }
 fullName(firstName, lastName) {
     return this.firstName + ' ' + this.lastName;
 }

}

let friend1 = new Person('Nchadi', 'Maluleka');
 alert('Hello ' + friend1.firstName, friend1.lastName );
friend1.greet();
let friend2 = new Person('Shekinah', 'Wabula');
alert('Hello ' + friend2.fullName());*/
//always reference key-value pair in console or alert
//put # in front of the key


/*class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        if (firstname.length > 1) {
            this.#firstname = firstname;
        } else {
            alert('firstname too short!');
        }
        this.#lastname = lastname;
    }
    get firstname() {
        return this.#firstname;
    }
    set firstname(firstname) {
        if (firstname.length > 1) {
            this.#firstname = firstname;
        } else {
            alert('First name too short!');
        }

    }
    get lastname() {
        return this.#lastname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
    }
}
let p = new Person('Alicia', 'Louw');
console.log(p.firstname, p.lastname)
//p.firstname = 'A';
Person.prototype.introduce = function() {
    console.log('Hi I\'m ', this.firstname);
}
Person.prototype.favoriteColor = 'green';
console.log(p.favoriteColor);
p.introduce();*/


/*********INHERITENCE******** */
/*class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}
class Motorcycle extends Vehicle {
    //extend shows that motorcycle already inherited the properties(keys) of the vehicle
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        //must call super to avoid refError
        this.fuel = fuel;
        //adding fuel property
    }
    //adding method which only applies to motorcycles
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}
let motor = new Motorcycle('Black', 0, 250, 'gasoline');
console.log(motor.color);
motor.accelerate(50);
motor.move();
console.log(motor.doWheelie)
*/
/***************PROTOTYPES************ */
/**Uses the person class */
// Person.prototype.introduce = function() {
//     console.log('Hi I\'m ', this.firstname);
// }
// Person.prototype.favoriteColor = 'green';
// console.log(p.favoriteColor);
// p.introduce();


/**********************EXERCISE 7.3************************* */
/*class Animals{
    constructor(animalType, sound) {
        this.animalType = animalType;
        this.sound = sound;
    }
    speak() {
        console.log('A ' + this.animalType + ' ' + this.sound + 's.');
    }
}
Animals.prototype.eats= function() {
    return 'The ' + this.animalType + ' is eating';
}
let pig = new Animals('pig', 'oink');
console.log(pig.speak());
// console.log(animal1.animalType, animal1.sound);
//let response1 = alert(response(animal1));
let cow = new Animals('cow', 'moo');
console.log(cow.speak());
//console.log(animal2.animalType, animal2.sound);
let horse = new Animals('horse', 'neigh');
console.log(horse.eats());
//console.log(animal3.animalType, animal3.sound);*/

