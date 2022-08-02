const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded());

let inputA;
let operator;
let inputB;
let output;

const calcList = [
    {
        inputA: 24,
        operator: '+',
        inputB: 19,
        output: 43,
        
    }
];
function doMath() {
    if (calcList.operator === '+') {
        calcList.output = calcList.inputA + calcList.inputB ;
    }  
    else if (calcList.operator === '-') {
        calcList.output = calcList.inputA - calcList.inputB;
    }
    else if (calcList.operator === '*') {
        calcList.output = calcList.inputA * calcList.inputB;
    }
    else if (calcList.operator === '/') {
        calcList.output = calcList.inputA / calcList.inputB;
    }

}


// GET calculation inputs 
app.get('/inputs', (req, res) => {
    res.send(calcList);
    
});

// Post new calculations to the DOM
app.post('/inputs', (req, res) => {
    const calculation = req.body;
    console.log(req.body);
    doMath();
    calcList.push(calculation);
    res.send(calcList);
    
})


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});