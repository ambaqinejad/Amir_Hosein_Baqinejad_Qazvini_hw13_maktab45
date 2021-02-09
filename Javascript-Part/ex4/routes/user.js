const express = require('express');
const path = require('path')
const fs = require('fs');

const router = express.Router();

router.post('/getUser', (req, res) => {
    fs.readFile(path.join(path.dirname(__dirname), 'data', 'users.json'),
        'utf-8', (err, users) => {
            if (err) {
                return res.status(400).json({ message: 'Something went wrong.' })
            }
            users = JSON.parse(users)
            const user = users.find(user => user.username === req.body.username)
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ message: 'user not found' })
            }
        })
})

module.exports = router;