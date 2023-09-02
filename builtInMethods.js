// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
"Hello World".toLowerCase();
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"

"Hello World".includes("Hello");
// The includes() method is called on the string "Hello World"
// An argument is passed containing the string "Hello"
// Includes() has the job of checking if the argument is included somewhere within the string but does not clarify where
// The return value is "true"

"Hello World".endsWith("Hello");
// The endsWith() method is called on the string "Hello World"
// An argument is passed containing the string "Hello"
// endsWith() has the job of checking if the argument exactly matches the end of the string
// The return value is "false"

"Hello World".endsWith("rld");
// The endsWith() method is called on the string "Hello World"
// An argument is passed containing the string "rld"
// endsWith() has the job of checking if the argument exactly matches the end of the string
// The return value is "true"


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
var firstName = "Jeff";
console.log(firstName.startsWith("J"));
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.

var stringLength = "How many characters?"
console.log(stringLength.length)
// The length method is called on the stringLength variable, which stores the string "How many characters?" 
// The return value of the length method is equal to the number of characters in the length of the string being stored as the variable
// In this example, the return value is 20 because that is the number of characters in "How many characters?"
// The console.log() statement prints the return value of the length method to the console.

var weather = 'rainy! ';
console.log(`It is super ${weather.repeat(3)}`);
// The repeat method is called on the weather variable, which stores the string 'rainy! '
// The weather variable is interpolated within the console.log function
// The repeat method causes the weather variable to repeat as many times as the number passed as an argument (in this case, 3)
// The console.log() statement prints a string with the weather variable repeated 3 times within that string

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var dogs = ["poodle", "labrador", "retriever", "hound"];
console.log(dogs.sort());
// The sort method is called on the variable dogs, which is an array of strings containing 4 elements
// The sort method functions within string arrays to put the string in alphabetical order
// The console.log() statement prints the array with the strings rearranged in alphabetical order to the console.
// The expected return is ['hound', 'labrador', 'poodle', 'retriever']

var countDown = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(countDown.reverse());
// The reverse method is called on the variable countDown, which is an array of numbers containing 11 elements
// The reverse method reverses the order of the numbers within the string
// The console.log() statement prints the array to the console in reverse order
// The expected return is [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]