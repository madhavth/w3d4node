const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function askName() {
    readline.question('What is your name? ', (name) => {

        if(name === '' || name === undefined) {
            console.log('invalid name, please enter a proper name');
            askName();
            return;
        }

        console.log(`Welcome ${name}`);
        askAge();
    });
}

function askAge() {
    readline.question('What is your age? ', (age) => {
        const parsedAge = parseInt(age);

        if (Number.isNaN(parsedAge) || parsedAge === undefined) {
            console.log('incorrect age value.. please try again.');
            askAge();
            return;
        }

        console.log(
            parsedAge < 16 ? "You're not allowed to drive in Iowa" :
                "You're allowed to get a drivers license in Iowa"
        );

    });
}

askName();