class Bank{
	static nextNumber = 11244;
	constructor(){
		this._accounts = [];
	}

	getAccount(number){
		return this._accounts.find(acc => acc.getNumber() === number);
	}

	addAccount(){
		let account = new Account(Bank.nextNumber);
		Bank.nextNumber += 543;
		this._accounts.push(account);
		return account.getNumber();
	}

	addSavingsAccount(){
		let account = new SavingAccount(Bank.nextNumber);
		Bank.nextNumber += 233;
		this._accounts.push(account);
		return account.getNumber();
	}

	addCheckingAccount(){
		let account = new CheckingAccount(Bank.nextNumber);
		this._accounts.push(account);
		Bank.nextNumber += 228;
		return account.getNumber();
	}

	closeAccount(number){
		let account = this._accounts.find(acc => acc.getNumber() === number);
		this._accounts.remove(account);
	}

	accountReport(){
		this._accounts.forEach(acc => console.log(acc.toString()));
		return null;
	}

	endOfMonth(){
		let report = this._accounts.map(acc => acc.endOfMonth());
		report.forEach(report => console.log(report));
		return report;
	}
}










