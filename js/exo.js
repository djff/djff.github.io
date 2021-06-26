
// 1. function to get the max of two number
function max(a, b){
	return a > b ? a : b;
}

// 2. function to get the max of three number
// makes use of the max of two numbers
function maxOfThree(elt1, elt2, elt3){
	return max(max(elt1, elt2), elt3);
}

// 3. Function to check if char is a vowel
function isVowel(char){
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	return vowels.includes(char);
}

// 4. a. Multiply all the elements in an array
const multiply = function(elts){
	return elts.reduce((total, value) => total * value, 1);
};


// 4. b. Sum all the elements in an array
const sum = function(elts){
	return elts.reduce((total, value) => total + value, 0);
};


// 5. reverse a string
const reverse = function(string){
	return string.split("").reverse().join("");
};


// 6. find the longest word in an array of words
const findLongestWord = function(words){
	let max_count = 0;
	let long_word_index = 0;
	words.forEach((element, i) => {
		let currentValue = element.split("").length;
		if(currentValue > max_count){
			long_word_index = i;
			max_count = currentValue;
		}
	});
	return words[long_word_index];
};


// 7. filter array of words to get words longer that provided length.
const filterLongestWords = function(words, min_len){
	return words.filter(element => element.split("").length > min_len);
};


// 8. Modifying the JSFiddle code.
// multiplying each element by 10
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})

// return array with all elements equal 3
const c = a.filter(function(elem, i, array){
  return elem === 3;});

// return product of all elements
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});


/* TESTING THE FUNCTIONS */

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of isVowel('c') is false " + myFunctionTest(false, isVowel('c')));
console.log("Expected output of isVowel('a') is true " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of multiply([1, 2, 3]) is 6 " + myFunctionTest(6, multiply([1, 2, 3])));
console.log("Expected output of sum([1, 2, 3]) is 7 " + myFunctionTest(7, sum([1, 2, 3])));
console.log("Expected output of reverse('kevin') is nivek " + myFunctionTest("nivek", reverse("kevin")));
console.log("Expected output of findLongestWord(['mine', 'kevin', 'set']) is kevin " + myFunctionTest("kevin", findLongestWord(['mine', 'kevin', 'set'])));
console.log("Expected output of findLongestWords(['mine', 'kevin', 'set'], 3) is ['mine', 'kevin'] " + myFunctionTest(['mine', 'kevin'].join(""), filterLongestWords(['mine', 'kevin', 'set'], 3).join("")));
console.log("Expected output of b is [10, 30, 50, 30, 30] " + myFunctionTest([10, 30, 50, 30, 30].join(""), b.join("")));
console.log("Expected output of c is [3, 3, 3] " + myFunctionTest([3, 3, 3].join(""), c.join("")));
console.log("Expected output of d is 135 " + myFunctionTest(135, d));


document.writeln("<span> Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)) + "</span><br />");
document.writeln("<span> Expected output of isVowel('c') is false " + myFunctionTest(false, isVowel('c')) + "</span><br/>");
document.writeln("<span> Expected output of isVowel('a') is true " + myFunctionTest(true, isVowel('a')) + "</span><br/>");
document.writeln("<span> Expected output of multiply([1, 2, 3]) is 6 " + myFunctionTest(6, multiply([1, 2, 3])) + "</span><br/>");
document.writeln("<span> Expected output of sum([1, 2, 3]) is 7 " + myFunctionTest(7, sum([1, 2, 3])) + "</span><br/>");
document.writeln("<span> Expected output of reverse('kevin') is nivek " + myFunctionTest("nivek", reverse("kevin")) + "</span><br/>");
document.writeln("<span> Expected output of findLongestWord(['mine', 'kevin', 'set']) is kevin " + myFunctionTest("kevin", findLongestWord(['mine', 'kevin', 'set'])) + "</span><br/>");
document.writeln("<span> Expected output of findLongestWords(['mine', 'kevin', 'set'], 3) is ['mine', 'kevin'] " + myFunctionTest(['mine', 'kevin'].join(""), filterLongestWords(['mine', 'kevin', 'set'], 3).join("")) + "</span><br/>");
document.writeln("<span> Expected output of b is [10, 30, 50, 30, 30] " + myFunctionTest([10, 30, 50, 30, 30].join(""), b.join("")) + "</span><br/>");
document.writeln("<span> Expected output of c is [3, 3, 3] " + myFunctionTest([3, 3, 3].join(""), c.join("")) + "</span><br/>");
document.writeln("<span> Expected output of d is 135 " + myFunctionTest(135, d) + "</span><br/>");


// Add some styling to the output using js
let spans = document.getElementsByTagName("span");
Array.from(spans).forEach(element => {
	console.log(element);
	element.style.display = "block";
	element.style.padding = "10px";
	element.style.marginTop = "10px";
	element.style.backgroundColor = "#cfcfcf";
	element.style.borderRadius = "10px"
	element.style.border = "1px solid gray";
	element.style.maxWidth = "700px";
	element.style.textAlign = "center";
});















