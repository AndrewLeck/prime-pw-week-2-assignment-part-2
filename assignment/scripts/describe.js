// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Make a veriable and set its value to 'Dane'
// Then we check to see if the 'Dane' = 'Mary' (it does not) so it will not console.log('Hi Mary')
// Then we move to the next line of code, the else statement, and because 'Dane' does not = 'Mary' it will console.log('How do you do?');
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create a variable called "secret"
// Create a variable called "code" and set its value to "123"
// Create a conditional if statement to check if code equals 123.(it does).
// We then change the value of secret to 'super' and code to 'code * 2'
// We then create another conditonal statment to check if 'code' is greter than 250. (its not).
// lastly we console.log('secret') and it out puts 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) { // if 123===123 than
  secret = 'super';// secret = super
  code = code * 2; // 123 = 123 * 2, 123 = 246
}

if (code > 250) { // if 246 > 250, (false)
  secret = 'duper' // than secret = duper
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create a variable called "isStudent" set its value to true
// Create a number variable called "age" set its value to 34
// Create a number variable called "zip" set its value to 55407
// Create a compound conditional  where the console.log('welcome to Prime!')

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) { // both must be true, and 55407 is not greater than 80000, move to next line
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) { // one of these must be true, isStudent is not false and age is not less than 30. Next line
  console.log('What are your hobbies?');
} else if (isStudent === true) { // isStudent === true. this line will log
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX let colorOne = 'blue'// not red.
let colorOne = 'red';

//FIX let colorTwo = 'red';
let colorTwo = 'blue';

let mix = true;
//FIX You can write it as if(mix){ // We already know mix = true.
  colorOne + colorTwo = 'purple'; // colorOne + colorTwo = purple because we mixed the two. 
}
if (mix === true) {
  colorOne = 'purple';
  //FIX  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX let time = 4;
const time = 4;

//Fix if( temp > 39 && time >= 4){
    console.log('throw away the food!');
}
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
//FIX let minAge = 21;
const minAge = 21;
// FIX if (minAge <= age){
  console.log('enter');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

