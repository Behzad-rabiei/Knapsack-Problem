const {FIRST_POPULATION, STUFFS, KNAPSACK_WEIGHT} = require('../Data');

class Individual{   // Each individual has stuffs, value(fitness) and weight of these stuffs
    constructor(){
        this.stuffs = [],
        this.weight = 0,
        this.fitness = 0    //  Sum values of stuffs
    }

    //  Generate Stuff
    generateIndividual(){
        const stuffsCopy = STUFFS.map(stuff => stuff);
        let temp, index;
        for(let i=0; i<STUFFS.length; i++){
            temp = stuffsCopy[Math.floor(Math.random() * stuffsCopy.length)];
            if(KNAPSACK_WEIGHT > this.weight + temp.weight){
                this.stuffs.push(temp);
                this.weight += temp.weight;
                this.fitness += temp.value;
            }
            for(let i=0; i<stuffsCopy.length; i++){
                if(stuffsCopy[i] === temp) index=i;
            }
            stuffsCopy.splice(index,1);
        }
    }

}

//  Generating array of Individuals
let individuals = [];
for(let i=0; i<FIRST_POPULATION; i++){
    individuals.push(new Individual);
    individuals[i].generateIndividual();
}


module.exports = individuals;