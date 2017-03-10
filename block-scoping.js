// Let / const is the new var. Let / const allows block scoping now in for loops and if statements. Just like functions create local scope. 

let b = 3;

for (var i = 1; i < 3; i++) {
	let b = 2; // This is blocked scope. Let / const allows local scoping in blocks just like functions. With var this would change the value of b to 3 because it would be global. 
}

console.log(b); // Will return 3. 

