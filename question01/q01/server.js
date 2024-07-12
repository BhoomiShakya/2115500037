const express = require('express');
const path = require('path');
const numbersController = require('./app/controllers/numbersController');

const app = express();
const port = 9876;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/', numbersController.getNumbers);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Average Calculator microservice listening at http://localhost:${port}`);
});
