//jshint esversion:6

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const e = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(express.static('public'));


let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}
app.listen(port, function () {
  console.log('Server started on port 3000');
});

app.use(function (req, res, next) {
  const address = port === 3000 ? 'http://localhost:1234' : 'https://v24-toucans-team-01.netlify.app';
  res.setHeader('Access-Control-Allow-Origin', address);
  next();
});

mongoose.connect(`mongodb+srv://${process.env.DBA}:${process.env.PASSWORD}@cakeshopproducts.znrl8.mongodb.net/cakeshopDB?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = {
    productId: Number,
    productName: String,
    price: String,
    image: String,
    category: String,
    description: String,
    ingredients: String 
};

const Product=mongoose.model("Product", productSchema);

//TODO
app.get("/products", function(req, res){
    Product.find(function(err, foundProducts){
        if(!err){
            res.send(foundProducts);
        } else {
            res.send(err);
        }
    });
});

app.route('/products/productname/:name')
.get(function (req, res) {
    Product.findOne({ productName: req.params.name}, function (err, foundProduct) {
      if (foundProduct) {
        res.send(foundProduct);
      } else {
        res.send('No articles matching that product name was found');
      }
    });
});

app.route('/products/productId/:id').get(function (req, res) {
  Product.findOne({ productId: req.params.id }, function (err, foundProduct) {
    if (foundProduct) {
      res.send(foundProduct);
    } else {
      res.send('No articles matching that product name was found');
    }
  });
});

app.route('/products/category/:category')
.get(function (req, res) {
  Product.find({ category: req.params.category }, function (err, foundProducts) {
    if (foundProducts) {
      res.send(foundProducts);
    } else {
      res.send('No articles matching that category was found');
    }
  });
});

