const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const orderSchema = new mongoose.Schema({
    name: String,
    mobileNumber: String,
    quantity: Number,
    size: String,
    address: String
  });
  app.post("/submit-order", (req, res) => {
    const { name, mobileNumber, quantity, size, address } = req.body;
  
    const newOrder = new Order({
      name,
      mobileNumber,
      quantity,
      size,
      address
    });
  
    newOrder.save()
      .then(() => {
        res.send('Order placed successfully!');
      })
      .catch(err => {
        res.status(400).send('Unable to save to database');
      });
  });
  
  
  const Order = mongoose.model('Order', orderSchema);
  

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://sahajanandareddy251:sivashop@cluster0.xlnq882.mongodb.net/shopnew2?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("http://localhost:3000/submit-order")
});
