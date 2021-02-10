const express = require('express');

const fs = require('fs');
const path = require('path');

let cars = [];

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use("/carDetailPage/css", express.static(path.join(__dirname, 'public', 'css')));
app.use("/carDetailPage/js/detail", express.static(path.join(__dirname, 'public', 'js', 'detail')));

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

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})

app.get('/getCarsData', (req, res) => {
    res.status(200).json(cars)
})

app.get('/carDetailPage/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'carDetail.html'))
})

app.get('/carDetailInfo/:id', (req, res) => {
    const car = cars.find(car => car.id === req.params.id);
    console.log(car);
    if (car) {
        res.status(200).json(car);
    } else {
        res.status(404).json({ message: '404 Page not Found...' })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})