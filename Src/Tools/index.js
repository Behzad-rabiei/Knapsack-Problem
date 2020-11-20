const {NUMBER_OF_POPULATION, NUMBER_OF_GENERATION, STUFFS, KNAPSACK_WEIGHT} = require('../Data');
const QuickChart = require('quickchart-js');

function spliceArray(array, element){   // This function get element and remove that from array
    let index;
    for(let i=0; i<array.length;i++){
        if(array[i] === element){
            index = i;
            break;
        }
    }
    array.splice(index,1);
}

function maxFitness(population){   //  This function find invidual that has max fitness
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

function averageFitness(popultaion){
    let total=0;
    for(let i=0; i<popultaion.length; i++){
        total += popultaion[i].fitness;
    }
    return total/popultaion.length;
}

function logOutput(population, averages, endTime){
    const invidual = maxFitness(population);
    console.log('***Solution***');
    console.log(`Chromosome: ${invidual.chromosome}      Fitness: ${invidual.fitness}      Weight: ${invidual.weight}`);   
    console.log(`Executing time: ${endTime[0] + endTime[1] * 1e-9 }\n`);
    console.log(`\n`);
    console.log('***Inputs***')
    console.log(`Number of population: ${NUMBER_OF_POPULATION}`);
    console.log(`Number of generation: ${NUMBER_OF_GENERATION}`);
    console.log(`Weight of knapsack: ${KNAPSACK_WEIGHT}\n`);
    console.log('***Stuffs***');
    STUFFS.forEach(stuff => console.log(`weight:${stuff.weight} , value:${stuff.value}\n`));
    let labels = [];
    for(i=0; i<averages.length; i++){
        labels.push(i+1);
    }
    console.log(`***Chart***`);
    createChart(averages,labels);
}

function createChart(data,labels){
    const chart = new QuickChart();
    const config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label : 'Fitness',
                    data: data
                }
            ]
        }
    }
    chart.setConfig(config);
    console.log(chart.getUrl());
}


module.exports = {
    spliceArray,
    maxFitness,
    averageFitness,
    logOutput,
}