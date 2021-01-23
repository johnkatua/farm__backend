const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


//routes
const cattleRoutes = require('./Routes/cattle');
const pastureRoutes = require('./Routes/pasture');


const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => {
  console.log('MongoDB connected')
})

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", cattleRoutes);
app.use("/api", pastureRoutes);


const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});



