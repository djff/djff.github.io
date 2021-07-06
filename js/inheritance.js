window.onload = function(){

	'use strict';

	// solution to exercise 1
	let filterBanned = function(...banned) {
		return this.split(" ").filter(elt => !banned.includes(elt)).join(" ")
	};
	String.prototype.filter = filterBanned;

	// Solution to exercise 2
	let bubbleSort = function(){

		for(let i=0; i<this.length-1; i++){
			for(let j=i+1; j<this.length; j++){
				if(this[j] < this[i]){
					let temp = this[i];
					this[i] = this[j];
					this[j] = temp;
				}
			}
		}
		return this;
	}
	Array.prototype.bubbleSort = bubbleSort;

	// Solution to exercise 3
	var Person = function() {};
	Person.prototype.initialize = function(name, age){

		 this.name = name;
		 this.age = age;
		}
	Person.prototype.describe = function(){
		 return this.name + ", " + this.age + " years old.";
		}

	var Teacher = function() {};

	Teacher.prototype = new Person();

	Teacher.prototype.teach = function(subject){
		return this.name + " is now teaching " + subject;
	}


	// Setup mocha and chai test
	mocha.setup("bdd");

	let assert = chai.assert;

	describe("filterBanned", function(){
		it("Method called on a string to remove all banned words " + 
		" sent into the function", function(){
			assert.equal("this is good and has good impact",
				"this is not good and has negative good impact".filter("not", "negative"));
		})
	});

	describe("bubbleSort", function(){
		it("Method called on a array to sort the array elements from min to max", 
			function(){
				assert.equal("12345", [2, 4, 5, 3, 1].bubbleSort().join(""));
			});
	});

	describe("teach", function(){
		it("method associated with the teacher object to get the subject be taught", 
			function(){
				var teacher = new Teacher();
				teacher.initialize("Michael", 37);
				assert.equal("Michael is now teaching WAP", teacher.teach("WAP"));
			});
	});

	mocha.run();

}











