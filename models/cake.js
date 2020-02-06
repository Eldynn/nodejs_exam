const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 200
  },
  baker: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 300
  },
  ingredients: {
    type: [String],
    validate: {
      validator: array => array.length,
      message: 'Expect an non empty array'
    },
    required: true,
    enum: ['chocolate', 'flour', 'gluten free flour', 'eggs', 'milk', 'strawberry', 'vanilla', 'sugar']
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  expirationDate: {
    type: Date,
    default: () => new Date()
  },
  isGlutenFree: {
    type: Boolean,
    default: false
  }
});

const Cake = mongoose.model('Cake', cakeSchema);

module.exports.Cake = Cake;
