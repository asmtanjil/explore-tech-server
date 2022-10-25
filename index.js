const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Explore Tech Server is Running')
});

app.listen(port, () => {
  console.log('Explore Tech is running on port:', port)
});