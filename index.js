const express = require('express');

const cakeRoutes = require('./routes/cake');

const app = express()
  .use(express.json());

app.use('/api/cakes', cakeRoutes);

const listener = app.listen(
  process.env.port || 3000,
  '127.0.0.1',
  () => console.info(`Server listening on http://${listener.address().address}:${listener.address().port}`)
);
