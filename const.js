// Const cannot be changed. 

const a = 5;

(function myFunc() {
  // a = 6;  Will throw an error. 
})();

// Const properties can be changed within an object. 

const myObj = {
  name: "Ryan"
}

myObj.name = "Bob";

console.log(myObj.name); // Bob

// Remember it is the declaration that can't be changed, not necessarily the value. 

const someVar = $("#input").val();
console.log(someVar);