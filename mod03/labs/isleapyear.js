'use strict'

let currentYear = (new Date().getFullYear());
const checkLeapYear = (year=currentYear) => {
    if(isNaN(year)||year<0){
        return 'Not a valid year!'
    }
    let isLeapYear = false;
    if(year%100===0){
        isLeapYear = (year%400===0);
    }
    else{
        isLeapYear = (year%4===0);
    }
    return isLeapYear;
} 

console.log('Is a Leap Year?')
console.log('Current year:' + checkLeapYear());
console.log('1946:' + checkLeapYear(1946));
console.log('1972:' + checkLeapYear(1972));

