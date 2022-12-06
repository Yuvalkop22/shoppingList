const express = require("express");
const mongoose = require("mongoose");
const app = express();

const url = `mongodb+srv://shop123:shop123@shop.5fcgkig.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
