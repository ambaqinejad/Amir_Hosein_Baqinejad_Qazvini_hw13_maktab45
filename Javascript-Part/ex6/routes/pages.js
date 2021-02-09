const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/:page', (req, res) => {
    const pageIndex = +req.params.page;
    if (pageIndex >= 1 && pageIndex <= 5) {
        res.sendFile(path.join(path.dirname(__dirname), 'public', `index${pageIndex}.html`))
    } else {
        res.sendFile(path.join(path.dirname(__dirname), 'public', '404.html'))
    }
})

module.exports = router;