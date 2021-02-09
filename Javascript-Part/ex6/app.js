const express = require('express');
const PORT = process.env.PORT || 3000;

const pagesRouter = require('./routes/pages');

const app = express();

app.use('/pages', pagesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})