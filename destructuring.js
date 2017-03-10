//ES6 - Destructuring - pull and create variables from an object. 

var foo = {
  bar: 3,
  baz: 2
}

// Instead of doing var bar = foo.bar 
// Useful when you have large names, you can just snatch a value out of it. 
// Creates var bar, var baz with their respected values from the object. 

var { bar, baz } = foo;
alert(bar);
alert(baz);

// Can do destructuring with Arrays. Pull and create variables from an array. 

var sports = ["Ball", "Bat", "Base", "Helmt"];

var [ var1, var2 ] = sports;
alert(var1); // Ball
alert(var2); // Bat

// Destructuring with objects. Can pull variables into objects. 

var someNum = 3;

var myObj = {
  name: "Ryan",
  someNum
}

myObj.someNum; // 3 


