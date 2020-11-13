const Individual = require('../../Individual');
const {spliceArray} = require('../../Tools');
function generatingChildren(parents){
    let children = []; 
    for(let i=0; i<parents.length / 2; i++){
        //  NOTE:   javaScript past reference of object (and arrays) by default
        let parentsCopy = parents.map(ind => Object.assign({},ind)); // This line copy the parents because parents is array of objects. 
        const {parent1, parent2} = pairing(parentsCopy);   
        const {child1,  child2}  = mating(parent1, parent2);    
        if(Math.random() < 0.3){
            mutation(child1);
        }
        if(Math.random() < 0.3){
            mutation(child2);
        }
        child1.calculate(); 
        child2.calculate();
        children.push(child1);
        children.push(child2);
    }
    return children;
}

 //  Selecting two parent for generate children
function pairing(parents){
    const parent1 = parents[Math.floor(Math.random() * parents.length)];
    spliceArray(parents, parent1);
    const parent2 = parents[Math.floor(Math.random() * parents.length)];
    spliceArray(parents, parent2);
    return {parent1, parent2};
}

//  Generating children
function mating(parent1, parent2){
    let pointRange = [1,2,3,4,5,6,7,8];
    const num1 = pointRange[Math.floor(Math.random() * pointRange.length)];
    spliceArray(pointRange, num1);
    const num2 = pointRange[Math.floor(Math.random() * pointRange.length)];
    point1 = Math.min(num1,num2);
    point2 = Math.max(num1,num2);
    
    let child1 = new Individual();
    let child2 = new Individual();

    for(let i=0; i<point1; i++){
        child1.chromosome[i] = parent1.chromosome[i];
        child2.chromosome[i] = parent2.chromosome[i];
    }

    for(let i=point1; i<point2; i++){
        child1.chromosome[i] = parent2.chromosome[i];
        child2.chromosome[i] = parent1.chromosome[i];
    }

    for(let i=point2; i<parent1.chromosome.length; i++){
        child1.chromosome[i] = parent1.chromosome[i];
        child2.chromosome[i] = parent2.chromosome[i];
    }
    return {child1 , child2};
}

function mutation(child){
    const index = Math.floor(Math.random() * child.chromosome.length);
    child.chromosome[index] = (child.chromosome[index] === 0) ? 1 : 0;
}

module.exports = generatingChildren;