const mongoose = require('mongoose');
const { Cake } = require('./cake');

const databaseAddress = 'mongodb://127.0.0.1';

mongoose
  .connect(
    databaseAddress,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.info(`Connected to database at ${databaseAddress}`))
  .catch(() => console.error(`Failed to connect to database at ${databaseAddress}`));

module.exports = {
  Cake
};
