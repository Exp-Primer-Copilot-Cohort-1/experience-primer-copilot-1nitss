//create new webserver
var express = require('express');
var router = express.Router();
//create new data model
var mongoose = require('mongoose');
var Comment = require('../models/Comment.js');

/* GET /comments listing. */
router.get('/', function(req, res, next) {
  Comment.find(function (err, comments) {
    if (err) return next(err);
    res.json(comments);
  });
});

/* POST /comments */
router.post('/', function(req, res, next) {
  Comment.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
//export module
module.exports = router;