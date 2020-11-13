const Individual = require('../../Individual');
//  Roulette wheel selection
function rouletteSelection(individuals, NUMBER_OF_POPULATION){
    //  NOTE:   javaScript past reference of object (and arrays) by default
    let individualsCopy = individuals.map(ind => Object.assign({},ind)); // This line copy the individuals because individuals is array of objects. 

    individualsCopy[0].probability = individualsCopy[0].fitness;
    for(let i=1; i<individualsCopy.length; i++){
        individualsCopy[i].probability = individualsCopy[i-1].probability + individualsCopy[i].fitness;
    }
    //  Selecting parents appropriate to the individual's fitness
    let selectedIndividuals = [];
    let random;
    for(let i=0; i<NUMBER_OF_POPULATION; i++){
        random = Math.random() * individualsCopy[individualsCopy.length - 1].probability;   //  Generating random number between 0 and max(probability)
        for(let j=0; j<individualsCopy.length; j++){
            if(individualsCopy[j].probability >= random){
                selectedIndividuals.push(new Individual(individualsCopy[j].chromosome, individualsCopy[j].weight, individualsCopy[j].fitness));
                break;
            }
        }
    }
    return selectedIndividuals;
}

module.exports = rouletteSelection;