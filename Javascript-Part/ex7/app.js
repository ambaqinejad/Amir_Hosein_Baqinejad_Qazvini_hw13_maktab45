const express = require('express');

const fs = require('fs');
const path = require('path');

let cars = [];

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
    fs.readFile(path.join(__dirname, 'data', 'cars.json'),
        'utf-8', (err, carsData) => {
            if (err) return res.status(400).json({ message: 'bad request' })
            cars = JSON.parse(carsData);
            next()
        })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'))
})

app.get('/getCarsData', (req, res) => {
    res.status(200).json(cars)
})

// app.get('/carDetail/:id', (req, res) => {
//     const car = cars.find(car => car.id === req.params.id);
//     if (car) {
//         console.log(car);
//         res.status(200).json(car);
//     } else {

//     }
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})