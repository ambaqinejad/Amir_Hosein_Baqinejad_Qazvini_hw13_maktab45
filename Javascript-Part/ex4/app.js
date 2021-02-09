const express = require('express');

const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

const PORT = process.env.PORT || 3000;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.use('/admin', adminRouter);
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})