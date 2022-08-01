const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded());

let inputA;
let operator;
let inputB;
let output;

const calculationsList = [
    {
        inputA: 24,
        operator: '+',
        inputB: 19,
        output: 43,
        
    }
];

// function doMath()

// GET calculation inputs 
app.get('/inputs', (req, res) => {
    res.send(calculationsList);
});

// Post new calculations to the DOM
app.post('/inputs', (req, res) => {
    const calculation = req.body;
    console.log(req.body);
    calculationsList.push(calculation);
    res.send(calculationsList);
})


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});