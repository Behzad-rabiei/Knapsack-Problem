//  Roulette wheel selection
function rouletteSelection(individuals, NUMBER_OF_POPULATION){
    //  NOTE:   javaScript past reference of object (and arrays) by default
    let individualsCopy = individuals.map(ind => Object.assign({},ind)); // This line copy the individuals because individuals is array of objects. 
    //  Calculating Sum of all Fitnesses
    let totalFitness = 0;
    for(let i=0; i<individualsCopy.length; i++){
        totalFitness += individualsCopy[i].fitness;
    }

    //  Calculating Selection Probability for each individual
    let totalProbability = 0;
    for(let i=0; i<individualsCopy.length; i++){
        individualsCopy[i].probability = totalProbability + (individualsCopy[i].fitness / totalFitness);
        totalProbability += individualsCopy[i].probability;
    }

    //  Selecting parents appropriate to the individual's fitness
    let selectedIndividuals = [];
    let random;
    for(let i=0; i<NUMBER_OF_POPULATION; i++){
        random = Math.random();
        for(let j=0; j<individualsCopy.length; j++){
            if(individualsCopy[j].probability >= random){
                selectedIndividuals.push(
                    {
                        chromosome: individualsCopy[j].chromosome,
                        weight: individualsCopy[j].weight,
                        fitness: individualsCopy[j].fitness
                    });
                break;
            }
        }
    }
    return selectedIndividuals;
}

module.exports = rouletteSelection;