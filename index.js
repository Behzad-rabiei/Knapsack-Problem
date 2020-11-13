const process = require('process');
const {NUMBER_OF_POPULATION, NUMBER_OF_GENERATION} = require('./Src/Data');
const Individual = require('./Src/Individual');
const rouletteSelection = require('./Src/Selection/RouletteWheel');
const generatingChildren = require('./Src/Generation/Children');
const {findMax} = require('./Src/Tools');



let startTime = process.hrtime();

//  Generating first population
let population = [];
for(let i=0; i<NUMBER_OF_POPULATION; i++){
    population.push(new Individual);
    population[i].randomGeneration();
}


const maxGeneration = [];   //  Saving max fitness in each generation 
for(let i=0; i<NUMBER_OF_GENERATION; i++){  //  Generation 
    let parents = rouletteSelection(population, NUMBER_OF_POPULATION);  //  Selecting parents
    let children = generatingChildren(parents); //  Selecting children
    population = rouletteSelection(parents.concat(children) , NUMBER_OF_POPULATION);    //  Selecting remainings  from parents and children
    maxGeneration.push(findMax(population));  
}
let endTime = process.hrtime(startTime);

console.log(findMax(maxGeneration));
console.log(`Number of population: ${NUMBER_OF_POPULATION}`);
console.log(`Number of generation: ${NUMBER_OF_GENERATION}`);
console.log(`Executing time: ${endTime[0] + endTime[1] * 1e-9 } `);





