const {NUMBER_OF_POPULATION, NUMBER_OF_GENERATION} = require('./Src/Data');
const Individual = require('./Src/Individual');
const rouletteSelection = require('./Src/Selection/RouletteWheel')
const generatingChildren = require('./Src/Generation/Children');

//  Generating first population
let population = [];
for(let i=0; i<NUMBER_OF_POPULATION; i++){
    population.push(new Individual);
    population[i].randomGeneration();
}


const maxGeneration = [];

for(let i=0; i<NUMBER_OF_GENERATION; i++){
    let parents = rouletteSelection(population, NUMBER_OF_POPULATION);
    let children = generatingChildren(parents);
    population = rouletteSelection(parents.concat(children) , NUMBER_OF_POPULATION);
    maxGeneration.push(maxer(population));

}

console.log(population);
console.log('***************Answer***************');
console.log(maxer(maxGeneration));



function maxer(population){
    let max=0;
    let ind;
    for(let i=0; i<population.length; i++){
        if(max < population[i].fitness){
            max = population[i].fitness;
            ind = population[i];
        }
    }
    return ind;
}



