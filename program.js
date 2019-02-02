// Palindrome Challenge

/*
Write a function that takes in a string as a parameter. Inside the function body, create a reversed version of that string using a loop, then compare the string to the revised string, and return true if both the revised and orginal strings are exactly the same.
*/

let userWord;

function reverseTest(string) {
	/*
	Function that accepts a spring parameter andsplits each word of that string into its own seperate value across an array named 'formula'.
	*/
	let formula = string.split("");
	let reversedString = [];
	/*
	A for loop is run that takes the total length of the array based on how many characters there were (ie. apple = 5) and subtracts it by 1 so that each index value of the array is hit (ie. e = 4, l = 3, etc.). Each value of the array is pushed into the 'reversedString' array, and i is reduced by one, each time the loop cycles through
	*/
	for (let i = (formula.length - 1); i >= 0; i--) {
		reversedString.push(formula[i]);
		/*
		When i = 0, the final values of the array are joined together to form one single string.
		*/
		if (i === 0) {
			console.log(reversedString.join(""));
		}
	}
	return reversedString.join("");
}

/*
An initial prompt is displayed to the user that asks to test whether their word is a palindrome or not. The do {} while () loop tests to make sure that the value of 'userWord' is not a number, or is left empty.
*/
do {
	userWord = prompt(`Welcome! Write a word and I'll see if that word is a palindrome!`);
} while (isNaN(userWord) !== true || userWord === null);

// Calls the reverseTest function and stores the user's answer as a reversed string to the results variable 'results'.
console.log(userWord);
let results = reverseTest((userWord));
console.log(results);

// Conditionals that test whether or not the user's answer, and the reverseTest function's results are the same string both forwards and backwards.
if (userWord.toUpperCase() === results.toUpperCase()) {
	alert(`Cool! The words ${userWord.toLowerCase()} and ${results.toLowerCase()} are the same forwards and backwards. That's a Palindrome!`);
} else {
	alert(`Doesn't look like ${userWord} and ${results} are the same fowards and backwards. Try again!`);
}

// Created by Brandon M. Schneider