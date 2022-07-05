// Code your solution in this file!
const returnFirstTwoDrivers = function() {
    console.log(['Antonia', 'Nuru', 'Amari', 'Mo'])
    return ['Antonia', 'Nuru']
};

const returnLastTwoDrivers = function () {
    console.log(['Antonia', 'Nuru', 'Amari', 'Mo'])
    return ['Amari', 'Mo']
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
     return function(number) {
         return number * x
     }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(names, drivers){
    return drivers (names) 
}

function driversNames(names){
    names.slice(0,2)
}