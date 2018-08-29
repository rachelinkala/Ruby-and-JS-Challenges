// FUNCTIONS



// write a js function which will take an array of #s and find the 2nd lowest and 2nd greatest #s


var stringArray = new Array('2', '6', '1', '3', '9', '7');
var intArray = stringArray.map(Number);
var second = intArray.sort(function(a,b){
    return b-a
  })[1];

//console.log(second)




// CONDITIONAL STATEMENTS AND LOOPS


// STRINGS

function IsString(input) {
  return (typeof(input) == 'string' ? "true" : "false");
}

console.log(IsString('w3'));

console.log(IsString(1, 2, 3));


// ARRAYS



// OBJECTS

// write a script to list the properties of a JavaScript object
var student = {
  name : "John Smith",
  grade : "10",
  homeroom : "Johnson"
};

var keys = Object.keys(student);

//console.log(keys)

// write a script to delete the rollno property from the following object. Also print the object before or after deleting the property

var students = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
};


