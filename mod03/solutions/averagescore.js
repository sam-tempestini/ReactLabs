'use strict'

function calculateAverageScore(dropLowest, ...scores){
    console.log(scores);
    if(dropLowest){
        let lowScore = Math.min(...scores);
        
        scores = scores.filter(function(item){
            return item != lowScore;
        })
    }

    const length = scores.length;
    let total = 0;
    for(let i = 0; i< length; i++){
        total += scores[i];
    }
    console.log('Average score:' + total/length);
}

console.log('Keep lowest');
calculateAverageScore(false, 92, 75, 88, 94);
console.log('Drop lowest');
calculateAverageScore(true, 92, 75, 88, 94);