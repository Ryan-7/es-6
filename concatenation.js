// The old way of concatenating template strings: 

var name = "Ryan";
var address = "141 N. Franklin St."
var greet = "Hi my name is " + name + " and I live at " + address;

// The ES6 Way. Can also do multiple lines. 

var newGreet = `Hi my name is ${name} and I live at ${address}`;

console.log(newGreet);