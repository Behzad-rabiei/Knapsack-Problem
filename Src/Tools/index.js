function spliceArray(array, element){
    let index;
    for(let i=0; i<array.length;i++){
        if(array[i] === element){
            index = i;
            break;
        }
    }
    array.splice(index,1);
}

function findMax(population){
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



module.exports = {
    spliceArray,
    findMax
}