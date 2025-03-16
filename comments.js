//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var comments = [
  {
    name: 'Person1',
    comment: 'This is a comment.'
  },
  {
    name: 'Person2',
    comment: 'This is another comment.'
  }
];

app.get('/comments', function (req, res) {
  res.json(comments);
});