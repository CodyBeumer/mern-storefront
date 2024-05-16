const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const examplesRouter = require('./routes/example');
const inventoryRouter = require('./routes/inventory');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/examples', examplesRouter);
app.use('/inventory', inventoryRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established sucessfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})