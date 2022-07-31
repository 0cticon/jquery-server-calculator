const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded());

const calculations = [];



app.listen(PORT, () => {
    console.log('listening on port', PORT);
});