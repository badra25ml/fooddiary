var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
var data = require("../data.json");

router.get('/:id', function(req, res) {
  res.send(data.personData[+req.params.id - 1]);
});
router.get('/home', function(req, res) {
  res.json(data);
});

module.exports = router;
