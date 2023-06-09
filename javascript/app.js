//guessing game in js


//ask user to input a maximum number 
let max = parseInt(prompt("Enter the max num!"));

//if not NaN ask again
while (!max) {
    max = parseInt(prompt("Enter a VALID max num!"));
}

//generate the target number within range of max and 1 
//floor is used to get rid of decimals
const target = Math.floor(Math.random() * max) + 1;


let guess = parseInt(prompt("Enter your 1st guess!"));

//her we have to parseInt the guess since the guess is a string 

let counter = 1;
while (parseInt(guess) !== target) {

    counter++;
    if (guess === 'q') {
        console.log("okayy :(((");
        break;
    }
    else if (guess > target) {
        guess = prompt("too high. Enter another guess :(");
    } else {
        guess = prompt("too low. Enter another guess :(");
    }
}

console.log("Nice you got it! It took you " + counter + " times!");
