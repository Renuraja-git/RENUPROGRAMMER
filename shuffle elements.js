function shuffleElements(input){
    let tempElement, randIndex;

    for(let index = 0; index < input.length; index++){
        randIndex = Math.floor(Math.random()*input.length);
        tempElement = input[index];
        input[index] = input[randIndex];
        input[randIndex] = tempElement;
    }
    return input;
    }
let inputArr = ["Hi","Hello","Welcome","to","World"];
console.log("=====Shuffle Elements=====");
console.log("Before Shuffle : " + inputArr);
let outputArr = shuffleElements(inputArr);
console.log("After shuffle : " + outputArr);