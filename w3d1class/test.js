window.onload = function(){
	"use strict";

	mocha.setup("bdd");

	let assert = chai.assert;

	let account = new Account("45223599");

	// test Account Class
	describe("getNumber", function(){
		it("Returns an account number",function(){
			assert.equal("45223599", account.getNumber());
		});
	});

	describe("deposit", function(){
		it("Adds the given amount to the balance", function(){
			account.deposit(10500.45);
			assert.equal(10500.45, account.getBalance());
		})
	})

	describe("withdraw", function(){
		it("Deducts the given amount from the balance", function(){
			account.withdraw(500);
			assert.equal(10000.45, account.getBalance());
		})
	})

	// test Savings Account class
	let savings = new SavingAccount("55555");
	savings.deposit(5000);
	describe("getNumber", function(){
		it("Returns an account number from saving account",function(){
			assert.equal("55555", savings.getNumber());
		});
	});

	describe("getInterest", function(){
		it("Account returns the provided interest rate that was set",function(){
			savings.setInterest(23.5);
			assert.equal(23.5, savings.getInterest());
		});
	});

	describe("addInterest", function(){
		it("Add the interest to the balance calculated using the interest rate",function(){
			savings.addInterest()
			assert.equal(6175, savings.getBalance());
		});
	});

	// test Savings Account class
	let checking = new CheckingAccount("55555");
	checking.deposit(5000);
	describe("getNumber", function(){
		it("Returns an account number from checking account",function(){
			assert.equal("55555", savings.getNumber());
		});
	});

	describe("setOverdraft", function(){
		it("Sets the overdraft limit for the checking account",function(){
			checking.setOverdraft(1000);
			assert.equal(1000, checking.getOverdraft());
		});
	});

	describe("withdraw", function(){
		it("withdraw from checking account setting limit to include overdraft",function(){
			checking.withdraw(6000);
			assert.equal(-1000, checking.getBalance());
		});
	});


	// Test the bank class
	let bank = new Bank();
	describe("addAccount", function(){
		it("Creates a new Account",function(){
			assert.equal(11244, bank.addAccount());
		});
	});

	describe("addSavingsAccount", function(){
		it("Creates a new Savings Account",function(){
			assert.equal(11787, bank.addSavingsAccount());
		});
	});

	describe("addCheckingAccount", function(){
		it("Creates a new Account",function(){
			assert.equal(12020, bank.addCheckingAccount());
		});
	});

	mocha.run();
}








