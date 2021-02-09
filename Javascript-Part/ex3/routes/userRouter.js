const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'public', 'user.html'));
})

router.get('/user-profile', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'public', 'userProfile.html'));
})

router.get('/user-about', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'public', 'userAbout.html'));
})

module.exports = router;