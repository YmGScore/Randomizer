let minInput; //declare variables
let maxInput;

document.getElementById("randomizeButton").onclick = function() { //on button clicked
    minInput = document.getElementById("minInput"); //get the min and max input values
    maxInput = document.getElementById("maxInput");

    let min = parseInt(minInput.value); //parse the input values to integers
    let max = parseInt(maxInput.value);

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; //generate a random number between min and max
    document.getElementById("randomNumberLabel").innerHTML = randomNumber; //display the random number
}



