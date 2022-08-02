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
// function doMath(calcList) {
//     console.log('in doMath');
//     calcList.output = '';
//     if (calcList.operator === '+') {
//         calcList.output = calcList.inputA + calcList.inputB ;
//     }  
//     else if (calcList.operator === '-') {
//         calcList.output = calcList.inputA - calcList.inputB;
//     }
//     else if (calcList.operator === '*') {
//         calcList.output = calcList.inputA * calcList.inputB;
//     }
//     else if (calcList.operator === '/') {
//         calcList.output = calcList.inputA / calcList.inputB;
//     }

// }


// GET calculation inputs 
app.get('/inputs', (req, res) => {
    res.send(calcList);
    
});

// Post new calculations to the DOM
app.post('/inputs', (req, res) => {
    const output = req.body;
    console.log(req.body);
    if(output.operator === '+') {
        output.output = output.inputA + output.inputB
    }
    else if(output.operator === '-') {
        output.output = output.inputA - output.inputB
    }
    else if(output.operator === '*') {
        output.output = output.inputA * output.inputB
    }
    else if(output.operator === '/') {
        output.output = output.inputA / output.inputB
    }
    calcList.push(output);
    res.send(calcList);
    
})


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});