const express = require('express');
const path = require('path');

const userRouter = require('./routes/userRouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})