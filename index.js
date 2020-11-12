const {NUMBER_OF_POPULATION, NUMBER_OF_GENERATION} = require('./Src/Data');
const Individual = require('./Src/Individual');
const rouletteSelection = require('./Src/Selection/RouletteWheel')


//  Generating first population
let population = [];
for(let i=0; i<NUMBER_OF_POPULATION; i++){
    population.push(new Individual);
    population[i].randomGeneration();
}

console.log(`avgF: ${averageFitness(population)}`);
for(let i=0; i<NUMBER_OF_GENERATION; i++){
    let parents = rouletteSelection(population, NUMBER_OF_POPULATION);
    console.log(`avgP: ${averageFitness(parents)}`);
}


function averageFitness(population){
    let tot = 0;
    for(let i=0; i<population.length; i++){
        tot += population[i].fitness;
    }
    return(`avg:${tot/NUMBER_OF_POPULATION}`);
}