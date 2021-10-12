describe("Account", function() {
    describe("Deposit amount", function() {
        describe("Test output of deposit method", function() {
            it("Expected output of 0 balance + 100 deposit is total 100", function() {
                let acc = new Account(123);
                acc.deposit(100);
                assert.equal(100, acc.getBalance());
            });

            it("Expected output: <= 0 deposit throws error", function() {
                let acc = new Account(123);
                assert.throw(() => { acc.deposit(-10.0) });
            });
        });
    });

    describe("Withdraw amount", function() {
        describe("Test output of withdraw method", function() {
            it("Expected output of 100 deposit and 10 withdraw is 90", function() {
                let acc = new Account(123);
                acc.deposit(100);
                acc.withdraw(10);
                assert.equal(90, acc.getBalance());
            });

            it("Expected output: Withdraw amount has to be greater than zero else throw error. withdraw -10 throws error. ", function() {
                let acc = new Account(123);
                assert.throw(() => { acc.withdraw(-10.0) });
            });
        });
    });


    describe("Test get account number", function() {
        describe("Test output of getNumber method", function() {
            it("Expected output new Account(110) is 110", function() {
                let acc = new Account(110);
                assert.equal(110, acc.getNumber());
            });
        });
    });
});

// Savings Account
describe("Savings Account", function() {
    describe("getInterest: Gives interst rate for given account", function() {
        it("Expected output of getInterest for new SavingsAccount(0001, 9.5) is 9.5 ", function() {
            let acc = new SavingsAccount(0001, 9.5);
            assert.equal(9.5, acc.getInterest());
        });
    });

    describe("setInterest: Sets new interst rate for given account", function() {
        it("Expected output of acc.setInterest(4.5) is 4.5 ", function() {
            let acc = new SavingsAccount(0001, 9.5);
            acc.setInterest(4.5)
            assert.equal(4.5, acc.getInterest());
        });
    });

    describe("addInterest: Add given interest to given account number", function() {
        it("Expected output of acc.addInterest  10 % for balance 100 is  110", function() {
            let acc = new SavingsAccount(0001, 10);
            acc.deposit(100);
            acc.addInterest()
            assert.equal(110, acc.getBalance());
        });
    });


    describe("toString", function() {
        it("Returns account number, balance and interst of given account",
            function() {
                let acc = new SavingsAccount('0001', 10);
                acc.deposit(100);
                acc.addInterest();
                assert.equal("Account 0001: balance 110: Interest 10", acc.toString());
            });
    });
});


//Checking Account
describe("Checking Account", function() {
    describe("getOverdraftLimit: get overdraft limit for given account", function() {
        it("Expected output for new CheckingAccount(1111, 500) is 500 ", function() {
            let account = new CheckingAccount(1111, 500);
            assert.equal(500, account.getOverdraftLimit());
        });
    });

    describe("setOverdraftLimit: Sets new overdraft limit for given account", function() {
        it("Expected output for account.setOverdraftLimit(700) is 700", function() {
            let account = new CheckingAccount(1111, 500);
            account.setOverdraftLimit(700)
            assert.equal(700, account.getOverdraftLimit());
        });
    });


    describe("withdraw", function() {
        it("Expected output: Throws error for negative amount withdrawal", function() {
            let account = new CheckingAccount(111, 500);
            assert.throws(() => { account.withdraw(-800) });
        });

        it("Expected output: Insuffucient balance withdrawal if balance + overdraft is lesser than withdrawal amount", function() {
            let account = new CheckingAccount(111, 500);
            account.deposit(200);
            // account.withdraw(999);
            assert.throws(() => { account.withdraw(999) }, Error);
        });

        it("Expected output: Deducts amount from existing balance or uses over draft limit", function() {
            let account = new CheckingAccount(111, 2000);;
            account.deposit(5000);
            account.withdraw(6000)
            assert.equal(-1000, account.getBalance());
        });
    });

});



// Bank
describe("Bank", function() {
    describe("addAccount", function() {
        it("Adds new account and returns total account count", function() {
            let bank = new Bank();
            assert.equal(1, bank.addAccount());
        });
    });

    describe("addSavingsAccount", function() {
        it("Expected output: Adds new savings account and returns total account count", function() {
            let bank = new Bank();
            assert.equal(1, bank.addSavingsAccount(4.5));
        });
    });

    describe("addCheckingAccount", function() {
        it("Expected output: Adds new checking account and returns total count", function() {
            let bank = new Bank();
            assert.equal(1, bank.addCheckingAccount(300));
        });
    });

    describe("closeAccount", function() {
        it("Expected output: Removes given account", function() {
            let bank = new Bank();
            bank.addAccount();
            bank.addAccount();
            bank.closeAccount(4)
            assert.equal(1, bank.accounts.length);
        });
    });
    describe("accountReport", function() {
        it("Expected output: Returns list of accounts and their details", function() {
            let bank = new Bank();
            bank.addAccount();
            bank.addAccount();
            assert.equal('Account 6: balance 0\nAccount 7: balance 0', bank.accountReport());
        });
    });
});


describe("Bank: endOfMonth", function() {
    it("Returns output of endOfMonth() function from all the objects",
        function() {
            let bank = new Bank();
            bank.addAccount();

            bank.addSavingsAccount(10);
            bank.accounts[bank.accounts.length - 1].deposit(100);

            bank.addCheckingAccount(5000);
            bank.accounts[bank.accounts.length - 1].withdraw(2000);
            assert.equal("\nInterest added SavingsAccount 9: balance 110 interest: 10\nWarning, low balance CheckingAccount 10: balance: -2000 overdraft limit: 5000",
                bank.endOfMonth());
        });
});