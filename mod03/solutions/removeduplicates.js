'use strict'

let destinations = ['Walt Disney World', 'Busch Gardens', 'Universal Studios','Kings Dominion', 'SeaWorld Orlando','Walt Disney World', 'Universal Studios'];
let numbers = [12, 35, 33, 56, 11, 26, 9, 11, 9, 35];

let result = destinations.sort().reduce(removeDuplicates,[]);
let result2 = numbers.sort((x,y)=>x-y).reduce(removeDuplicates, []);


function removeDuplicates(accumulator, current){
    const length = accumulator.length;
    //console.log(length);
    if(length === 0 || accumulator[length-1] != current){
        accumulator.push(current);
    }
    return accumulator;

}

console.log(result);
console.log(result2);