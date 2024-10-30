// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
require('dotenv').config();

// Port
const PORT = process.env.PORT || 3008;

// Express
const app = express();

app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connecting to Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error(err));;
  
// routes
app.use(require("./routes/api.js"));

// starting server
app.listen(PORT,(error)=>{
  if (!error) {
      console.log("Server Running on Port "+PORT)
  }
  else {
      console.log("Error : "+error)
  }
})