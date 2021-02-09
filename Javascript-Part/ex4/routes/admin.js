const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/getAllUsers', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'data', 'users.json'))
})

module.exports = router;