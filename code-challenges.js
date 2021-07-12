// ASSESSMENT 1: Coding practical questions
// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

  // This function needs a single param/argument and to output one of three predetermined messages based on three ways to compare the input with the number 212
  // A single if statement with two chaining else ifs covers all these cases

  const boilingChecker = (temp) => {
    if(temp > 212){
      console.log(`${temp} is above boiling point`)
    } else if(temp < 212){
      console.log(`${temp} is below boiling point`)
    } else if(temp == 212){
      console.log(`${temp} is at boiling point`)
    }
  }

 const boilingPoint = (temp) => {
   return (temp == 212)
     ? '212 is at boiling point'
     : (temp > 212)
     ? `${temp} is above boiling point`
     : `${temp} is below boiling point`
 }
console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

  // This function has two parameters and returns one array. Both arguments are expected to be arrays. Simply return the output of the arrays operated on first by the
  // array.concat() method, and then the array.sort() method
  /* const arrayJoiner = (array1, array2) => {
  //   console.log(array1.concat(array2).sort())
   }*/
  // output
  // [
  //   -7, -9, 0, 13, 22,
  //    3, 36, 7,  8,  9
  // ]
  //
  // After reading more about array.sort() I understand how to make it do what I need it to do and sort numerically

  const arrayJoiner = (array1, array2) => {
    console.log(array1.concat(array2).sort((a, b)=>a-b))
  }

  // arrayJoiner(myNumbers1, myNumbers2)
  // output
  // [
  //   -9, -7,  0,  3,  7,
  //    8,  9, 13, 22, 36
  // ]
  //
  // But I don't think that's what you necessarily wanted. Nevertheless, I do not know any better way to sort the array numerically, especially without looping.

// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

  // If I treat the string like an array this problem is quite simple, as I can just use the .reverse() method on an array and then stringify it once again, thus
  // I'll use the .split() function on the string input and go from there

  const reverseString = (string) => {
    let array = string.split("")
    array.reverse()
    array = array.join("")
    return array
  }

  // console.log(reverseString(myString1))
  // It works! I had to sit and remember for a few seconds that the str.split() function needs an empty pair of quotation marks

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27
var numberExample3 = 7
var numberExample4 = 19

  // For this problem I need to first check which number is bigger, and then simply output the result of their numerical relation. I can do this with an if/elseif.
  // To handle the edge case of the numbers being equal I will have an else that returns zero.

  const difference = (num1, num2) => {
    if(num1 > num2){
      return num1 - num2
    } else if(num2 > num1){
      return num2 - num1
    } else return 0
  }

  // In case we want to add more test examples, heres a test machine
  // I'll add a variable for it
  var testNumbers = [[42, 27], [7, 19], [18, 18], [183, 255]]
  // I made sure it worked by adding the array by hand at first
  /*[[42, 27], [ 7, 19 ]]*/testNumbers.map(e => {
    console.log(difference(e[0], e[1]))
  })

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"
var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

  // For this all I need to do is add extra relational operators into each if statement with the && operand

  const differenceRedux = (num1, num2) => {
    if(num1 > num2 && typeof num1 == "number" && typeof num2 == "number"){
      return num1 - num2
    } else if(num2 > num1 && typeof num1 == "number" && typeof num2 == "number"){
      return num2 - num1
      //Have to add another else-if here so that 0 still works
    } else if(typeof num1 == "number" && typeof num2 == "number"){
      return 0
    } else return "Your input is not a number"
  }

  // testNumbers = [[42, "hello"], [27, 24], [85, 24], [183, "ninety-four"]]
  // testNumbers.map(e => {
  //   console.log(differenceRedux(e[0], e[1]))
  // })
  //
  // All systems functional
