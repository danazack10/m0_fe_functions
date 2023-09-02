// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(){
    var general = "Well, hello there!";
    return general;
}
console.log(greeting());
console.log(greeting() + "It's so nice to see you!");

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(firstName, lastName){
    var fullName = firstName + " " + lastName;
    return (`It's so nice to see you, ${fullName}!`);
}
console.log(customGreeting("John", "Doe"));
console.log(customGreeting("Dana", "Zack"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName){
    var entireName = firstName + " " + middleName + " " + lastName;
    return (`${entireName}... Welcome home!`)
}
console.log(greetPerson("Dana", "Elizabeth", "Zack"));
console.log(greetPerson("Lauren", "Nicole", "Zack"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num){
    var answer = Math.pow(num, 2);
  //OR --> var answer = num**2;
    return (`Your answer is: ${answer}!`);
}
console.log(square(4));
console.log(square(10));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(amount, item) {
    var quantity = amount
    if (quantity === 0) {
      console.log(`${item} - OUT of stock!`);
    } else if (quantity < 4) {
      console.log(`${item} - running LOW`);
    } else {
      console.log(`${item} is stocked`);
    }
  }
console.log(checkStock(4, "Coffee"));
// => "Coffee is stocked"

console.log(checkStock(3, "Tortillas"));
// => "Tortillas - running LOW"

console.log(checkStock(0, "Cheese"));
// => "Cheese - OUT of stock!"

console.log(checkStock(1, "Salsa"));
// => "Salsa - running LOW"