class CheckingAccount extends Account{
	constructor(number){
		super(number);
		this._overdraft = 0.0;
	}

	getOverdraft(){
		return this._overdraft;
	}

	setOverdraft(overdraft){
		this._overdraft = overdraft;
	}

	withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this.getBalance() + this._overdraft) {
            throw Error("Amount is beyond withdrawal limit");
        }
        this._balance -= amount;
    }

    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance;
    }

    endOfMonth() {
    	if(this.getBalance() < 0){
    		return "Warning, low balance CheckingAccount " + this.getNumber()
    		+ ": balance: " + this.getBalance() + " overdraft limit: " + this._overdraft;
    	}
        return ""; // does nothing
    }
}