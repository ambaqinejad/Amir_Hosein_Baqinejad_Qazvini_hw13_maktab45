const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})