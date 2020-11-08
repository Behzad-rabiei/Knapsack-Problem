const individuals = require('./Src/Individual');
const parentSelection = require('./Src/Selection/RouletteWheel')
const selectedIndividuals = parentSelection(individuals);
for(let i=0; i<individuals.length; i++){
    console.log(individuals[i]);
}

console.log('########################################')

for(let i=0; i<selectedIndividuals.length; i++){
    console.log(selectedIndividuals[i]);
}