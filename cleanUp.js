// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName(){
  return "Hello, what is your name?";
}
console.log(askForName());
// I removed console.log from within the function's code block and replaced it with "return"
// "Return" is the data that the function will return when it is called
// I added a semi-colon to the code block
// I then added console.log in front of the function name on the last line so that I could test the code
// And lastly I reformatted so that the code block within the curly brackets was its own line for readability

// EX 2:
function addThreeNums(first, second, third){
    var sum = first + second + third;
    return sum;
}
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
// I didn't change much for this function, aside from reformatting for readability (indenting var and return and fixing the second curly bracket)
// I also added some needed semi-colons to the code block
// I then added console.log on the last two lines so that I could test the code

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}
console.log(makeFreshPesto());
// I corrected "func" to "function" as this is the proper keyword to declare a new function
// I moved the second curly bracket down for readability/formatting
// I then added console.log on the last line so that I could test the code

//  EX 4:
function average(num1, num2){
    var sum = num1 + num2;
    var avg = sum / 2;
    return avg
}
console.log(average(3,2));
console.log(average(6, 30));
console.log(average(8, 14));
  // I moved the first curly bracket to the end of the top line
  // I then put the two variables and return function in line with each other for readability
  // I added a semi colon to the return line within the code block
  // Finally, I added console.log so I could test the code (and tested it with a few numbers to ensure correct)