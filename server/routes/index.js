const express = require('express');
const router  = express.Router();
const phones = require('../data/phones')

/* GET home page */
router.get('/phones', (req, res, next) => {
  res.json(phones);
});

module.exports = router;
