const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getno = (sum) => {
    readline.question('Enter no (or Enter stop to exit.): ', no => {
        sum = sum === undefined ? 0 : sum;
        if (no === 'stop') {
            readline.close();
            console.log("Sum: " + sum);
            return;
        }
        if (parseInt(no)) {
            sum += parseInt(no);
        }
        getno(sum);
    })
};

getno();