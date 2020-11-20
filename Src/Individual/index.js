const {STUFFS, KNAPSACK_WEIGHT} = require('../Data');
const {spliceArray} = require('../Tools');

class Individual{   // Each individual has chromosome, value(fitness) and weight of this chromosome
    constructor(chromosome = new Array(STUFFS.length).fill(0), weight=0, fitness=0){
        this.chromosome = chromosome, //  Create array suffus.lenght and fill that array with 0
        this.weight = weight,
        this.fitness = fitness   //  Sum values of stuffs that picked
    }
    //  Generating random invidula
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
            spliceArray(stuffsCopy, temp);
        }
    }
    //  Calculating fitness and weight for a child
    calculate(){
        for(let i=0; i<this.chromosome.length; i++){
            if(this.chromosome[i] === 1){
                this.fitness += STUFFS[i].value;
                this.weight += STUFFS[i].weight;
            }
        }
        if(this.weight > KNAPSACK_WEIGHT){
            this.fitness = 1 / this.weight;
        }
    }
}

module.exports = Individual;