class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    };

    addInterest() {
        let intAMt = this._balance * this.getInterest() / 100;
        this._balance += intAMt;
    }

    toString() {
        return super.toString() + ": Interest " + this.getInterest();
    }

    endOfMonth() {
        this.addInterest();
        return "Interest added SavingsAccount " + this._number + ": balance " + this._balance + " interest: " + this._interest;
    }

}



class Computer {
    constructor(ram, cpu, storage) {
        this._ram = ram;
        this._cpu = cpu;
        this._storage = storage;
    }

    runProgram(program) {
        console.log("running: " + program);
    }
}


class Laptop extends Computer {
    constructor(ram, cpu, storage, battery) {
        super(ram, cpu, storage);
        this._battery = battery;
    }

    carryAround() {
        console.log("Carrying laptop:  cpu: " + this._cpu + " ram: " + this._ram + " storage: " + this._storage + " battery: " + this._battery);
    }
}


var l = new Laptop("16GB", "Intel", '512 SSD', "4cell");
l.carryAround();
l.runProgram('MS');