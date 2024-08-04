const express = require('express');
const dbConnection = require('./DBconfig/dbConnection');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});

dbConnection();

app.use('/', require('./routes/userRoutes'));

app.use('/', require('./routes/taskRoutes'));
