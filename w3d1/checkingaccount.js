class CheckingAccount extends Account {
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    };

    getOverdraftLimit() {
        return this._overdraftLimit;
    };

    setOverdraftLimit(od) {
        this._overdraftLimit = od;
    };

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if ((this._balance + this._overdraftLimit) < amount) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    };


    toString() {
        return super.toString() + ": Overdraft Limit " + this.getOverdraftLimit();

    };

    endOfMonth() {
        if (this._balance < 0) {
            return "Warning, low balance CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this.getOverdraftLimit();
        }
        return "";
    };
}