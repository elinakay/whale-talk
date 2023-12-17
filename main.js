// Given input string
const input = "turpentine and turtles";

// Array of vowels to check against
const vowels = ["a", "e", "i", "o", "u"];

// Array to store the vowels found in the input
let resultArray = [];

// Check for specific vowels 'e' and 'u'
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }

// Check if the current character is a vowel (case-insensitive)  
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    if (input[inputIndex].toLowerCase() === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
}

// Join the found vowels into a string and convert it to uppercase
let resultString = resultArray.join('').toUpperCase();

// Display the final result
console.log(resultString);
