const keys = document.querySelectorAll('.key');
const display = document.querySelector('.display');
const clearAllKey = document.querySelector('#clear-all');
const clearDigit = document.querySelector('#clear-digit');
const equalTo = document.querySelector('#equal');
const percent = document.querySelector('#percentage');


function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function clearSingleDigit() {
    if (display.value.length > 0) {
        // Use slice() to get all characters except the last one
        display.value = display.value.slice(0, -1);
    }
}

function calculate () {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value('Error')
    }
} 

function percentCalc () {
    display.value = display.value/100;
}


for (let key of keys) {
    key.addEventListener('click', () =>{
        // console.log(key.value);
        appendToDisplay(key.value);
    })
}

clearAllKey.addEventListener('click', clearDisplay);

clearDigit.addEventListener('click', clearSingleDigit);

equalTo.addEventListener('click', calculate);

percent.addEventListener('click', percentCalc);