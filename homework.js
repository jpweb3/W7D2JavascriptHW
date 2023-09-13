//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
} 
for (const value of Object.values(person3)){
    console.log(value)
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  // Create another arrow function for the addAge method that takes a single parameter
  // Adding to the age 
    this.incrementAge = () => {
      this.age += 1;
    };
    this.addAge = (yearsToAdd) => {
        this.age += yearsToAdd;
        console.log(`After incrementing ${this.name}'s age by 3 years:`);
      };
  }


  
  // Create two people using the 'new' keyword
const person1 = new Person("Clark Kent", 30);
const person2 = new Person("Tony Stark", 25);
  
  // Print both of their infos
person1.printInfo(); 
person2.printInfo(); 
  
  // Increment one person's age by 3 years
person1.addAge(3);

  

person1.printInfo(); 
person2.printInfo(); 







// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"

*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small Number");
      }
    });
  }
  
  // Example usage:
  checkStringLength("Hello World")
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });


    // ============= CodeWars ============//

    // Very simple, given an integer or a floating-point number, find its opposite.

    // Examples:
    
    // 1: -1
    // 14: -14
    // -34: 34
// My soluton
    function opposite(number) {
        num = number * -1
        return num
        //your code here
      }
// Cool way of writing 
    function opposite(number) {
        return -number;
      }

//In this simple assignment you are given a number and have to make it negative. 
//But maybe the number is already negative?

function makeNegative(num) {
    if (num <= 0) return num;
    return -num;

  }