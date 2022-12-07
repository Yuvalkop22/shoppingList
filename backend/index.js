require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

//express app
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  //console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/products/", productRoutes);

const MONGO_URI =
  "mongodb+srv://shop1234:shop1234@shop.iknreux.mongodb.net/?retryWrites=true&w=majority";
//connect to db
mongoose.set('strictQuery', true);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
