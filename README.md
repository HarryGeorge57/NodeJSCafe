# NodeJSCafe
JS has 4 ways to declare a varible
	var - let - const - nothing
	To run in browser older than 2015, have to use var.
	
Always declare with const, if I think it will change use let.
JavaScript variables can hold numbers like 100 and text values like "John Doe".
It's a good programming practice to declare all variables at the beginning of a script.
You cannot re-declare a variable declared with let or const.
Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
Variables defined with let have Block Scope.
Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.
let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object
JavaScript has only one type of numbers.
Numbers can be written with, or without decimals
JavaScript arrays are written with square brackets.
Array items are separated by commas.
The following code declares (creates) an array called cars, containing three items (car names):
Example:	const cars = ["Saab", "Volvo", "BMW"];
JavaScript Objects
JavaScript objects are written with curly braces {}.
Object properties are written as name:value pairs, separated by commas.
Example:	const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
You can use the JavaScript typeof operator to find the type of a JavaScript variable.
The typeof operator returns the type of a variable or an expression
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)
The code to be executed, by the function, is placed inside curly brackets: {}
When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller":
Arrow functions were introduced in ES6.
Arrow functions allow us to write shorter function syntax:
let myFunction = (a, b) => a * b;
