const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('enter numbers to sum:');

function askInput(sum = 0) {

    readline.question('input: ', (value) => {
        
        if(value === 'stop') {
            printOutput(sum);
            return;
        }

        let parsedNum = parseInt(value);

        if(Number.isNaN(parsedNum) || parsedNum === undefined) {
            parsedNum = 0;
        }

        return askInput(sum + parsedNum);
    });
    
}

function printOutput(sum) {
    console.log(`the output sum for all given elements is ${sum}`);
}

askInput();