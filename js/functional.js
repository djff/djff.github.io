window.onload = function(){
	"use strict";

	// initialize mocha
    mocha.setup('bdd');
    // chai has a lot of stuff, let's make assert global
    let assert = chai.assert;

    // description for the sum function
    describe("sum", function(){
    	it("takes an array of numbers and returns the sum of all elements " +
    		"in the array", function(){
    			assert.equal(6, sum([1, 2, 3]));
    		});
    });

    //description for the multiply function
    describe("multiply", function(){
    	it("takes an array of numbers and returns the product of all " +
    		"all elements in the array", function(){
    			assert.equal(24, multiply([1, 2, 3, 4]));
    		});
    });

    // description of the reverse function
    describe("reverse", function(){
    	it("takes a string and returns the reverse of the inputed string",
    		function(){
    			assert.equal("nivek si siht", reverse("this is kevin"));
    		});
    });

    // description of the filterLongWords function
    describe("filterLongWords", function(){
    	it("takes an array of words and an integer i and returns a new array " +
    		"containing string whose length is greater than i", function(){
    			assert.equal(["ba ba", "blar blar"].join(""), filterLongWords(["ba", "ba ba", "blar", "blar blar", "blue"], 4).join(""));
    		});
    });

    // function definitions

    // sum function.
    const sum = array => array.reduce((acc, elt) => acc + elt);

    // product function
    const multiply = array => array.reduce((acc, elt) => acc * elt, 1);

    // reverse function
    const reverse = str => str.split("").map((elt, i, array) => array[array.length - i -1]).join("");

    // filterLongWords function
    const filterLongWords = (array, i) => array.filter(elt => elt.length > i);


    // Run Moca test
    mocha.run();

}










