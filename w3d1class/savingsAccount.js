"use strict";

class SavingAccount extends Account{
	constructor(number){
		super(number);
		this._interest = 0.0;
	}

	getInterest(){
		return this._interest;
	}

	setInterest(interest){
		this._interest = interest;
	}

	addInterest(){
		this.deposit(this._balance * this._interest / 100);
	}

	toString(){
		return "Saving Account " + this.getNumber() + ": balance " + this.getBalance();
	}

	endOfMonth() {
		this.addInterest();
        return "Interest added to SavingsAccount " + this.getNumber() +
        ": balance: " + this.getBalance() + " interest: " + this._interest; // does nothing
    }
}