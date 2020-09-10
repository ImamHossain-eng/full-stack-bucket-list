const express = require('express');

const app = express();

app.get('/', function (req, res){
    res.send('Hello World');
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));