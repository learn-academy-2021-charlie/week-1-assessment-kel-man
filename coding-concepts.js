// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.length)

// a) Your answer: This will log 12
// b) Verify and explain: This logs the length of the string, 12. This includes the space


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: Wthis will log "l"
// b) Verify and explain: This logs "l" because it is the character in the third index of "Hello World!"


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: This will log "Ruby"
// b) Verify and explain: This logs "Ruby" as the value of index is 1, making languages[1] and thus "Ruby"


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: I don't think this works because weekendDays is not a string, but we will see
// b) Verify and explain: I am correct and this console.log throws an error. .toUpperCase() only works on string type data


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: This will log "number"
// b) Verify and explain: The dataTypes.length resolves first as it is a single expression, so typeof being called on the
//                        number 5, 5 being the length of "array".
