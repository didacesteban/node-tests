const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'didac',
    age: 26
  },{
    name: 'manel',
    age: 26
  }]);
});

app.listen(3000);
module.exports.app = app;
