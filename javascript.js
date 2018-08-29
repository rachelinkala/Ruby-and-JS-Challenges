// FUNCTIONS



// write a js function which will take an array of #s and find the 2nd lowest and 2nd greatest #s
var stringArray = new Array('2', '6', '1', '3', '9', '7');
var intArray = stringArray.map(Number);
var second = intArray.sort(function(a,b){
    return b-a
  })[1];

console.log(second)




// CONDITIONAL STATEMENTS AND LOOPS



// STRINGS

// write a script to check whether an input is a string or not
function IsString(input) {
  return (typeof(input) == 'string' ? "true" : "false");
}

console.log(IsString('w3'));

console.log(IsString(1, 2, 3));

// write a script to check whether a string is blank or not
var str = [];
console.log((str.length === 0 ? "true" : "false"))

// write a script to split a string and convert it into an array of words
var singer = "Tori Kelly".split(" ");
console.log(singer)


// ARRAYS

// write a simple script to join all elements of a given array into a string
var colors = ["Red", "Green", "White", "Black"];
var rainbow = colors.join("");
console.log(rainbow)

// write a script to sort the items of an array
var integers = [1, 3, 7, 2, 9, 1, 66, 33, 82, 6, 91, 34];
integers.sort(function(a, b) {return a - b});
console.log(integers)


// OBJECTS

// write a script to list the properties of a JavaScript object
var student = {
  name : "John Smith",
  grade : "10",
  homeroom : "Johnson"
};

var keys = Object.keys(student);

console.log(keys)

// write a script to delete the rollno property from the following object. Also print the object before or after deleting the property
var students = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
};

delete students.rollno;

console.log(students)

