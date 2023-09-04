// console.log('eso es lo que hace nodemon');

import _ from "lodash";

// filtrar numero pares de un arreglo


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pairNumber = _.filter(numbers2, (value) => {
    return value %2 === 0 || 0
});

console.log(pairNumber);