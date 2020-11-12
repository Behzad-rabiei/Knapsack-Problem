const {STUFFS, KNAPSACK_WEIGHT} = require('../Data');

class Individual{   // Each individual has chromosome, value(fitness) and weight of this chromosome
    constructor(){
        this.chromosome = new Array(STUFFS.length).fill(0), //  Create array suffus.lenght and fill that array with 0
        this.weight = 0,
        this.fitness = 0    //  Sum values of stuffs that picked
    }

    randomGeneration(){
        const stuffsCopy = STUFFS.map(stuff => stuff);
        let temp, index;
        for(let i=0; i<this.chromosome.length; i++){
            temp = stuffsCopy[Math.floor(Math.random() * stuffsCopy.length)];
            if(KNAPSACK_WEIGHT > this.weight + temp.weight){    //  Sum of weight each individual must be equal or lower than knapsack weight
                this.chromosome[STUFFS.indexOf(temp)] = 1;
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

module.exports = Individual;