const fs = require('fs');
const path = require('path');

//  Reading data from input.txt 
//  Then converting Data to String and spliting the data at every kind of whitespace character
//  Note: /\s/ splits the array at every kind of whitespace character
const filePath = path.join(__dirname, 'input3.txt');   
const data = (fs.readFileSync(filePath).toString().split(/\s+/)); 

const NUMBER_OF_POPULATION = parseInt(data[0]);   // It represent amount of individuals that we have in each generation
const NUMBER_OF_GENERATION = parseInt(data[1]);   
const KNAPSACK_WEIGHT = parseInt(data[2]); 
let stuffs = [];    //  This array holds the weight and value of each stuff
for(let i=3; i<data.length; i++){
    stuffs.push({
        weight: parseInt(data[i]),
        value: parseInt(data[++i])
    });
}

module.exports = {
    NUMBER_OF_POPULATION,
    NUMBER_OF_GENERATION,
    KNAPSACK_WEIGHT,
    STUFFS: stuffs
};