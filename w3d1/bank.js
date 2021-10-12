class Bank {
    accounts = [];
    static nextNumber = 0;

    addAccount() {
        let acc1 = new Account(++Bank.nextNumber);
        this.accounts.push(acc1);
        return this.accounts.length;
    };

    addSavingsAccount(interest) {
        let acc1 = new SavingsAccount(++Bank.nextNumber, interest);
        this.accounts.push(acc1);
        return this.accounts.length;
    }

    addCheckingAccount(overdraft) {
        let acc1 = new CheckingAccount(++Bank.nextNumber, overdraft);
        this.accounts.push(acc1);
        return this.accounts.length;
    }

    closeAccount(number) {
        this.accounts = this.accounts.filter(x => x.getNumber() !== number);
    }

    accountReport() {
        return this.accounts.map(x => x.toString()).join("\n").toString();
    }

    endOfMonth() {
        return this.accounts.map(acc => acc.endOfMonth()).join("\n").toString();
    }


}