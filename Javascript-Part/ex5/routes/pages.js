const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/1', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'public', 'index1.html'))
})

router.get('/2', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'public', 'index2.html'))
})

router.get('/3', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'public', 'index3.html'))
})

router.get('/4', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'public', 'index4.html'))
})

router.get('/5', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'public', 'index5.html'))
})

router.use((req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'public', '404.html'))
})

module.exports = router;