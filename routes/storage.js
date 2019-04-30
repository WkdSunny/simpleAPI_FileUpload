var express = require('express');
var multer = require('multer');
var upload = require('../modules/multer-integration').upload;

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('upload', { title: 'API - File Upload' });
    //res.send('reached');
  });

router.post('/',function(req,res){
    upload(req,res,function(err) {
      console.log(req.headers);
      if(err instanceof multer.MulterError) {
          console.log(multer.MulterError);
      } else if(err ) {
          return res.end("Error uploading file.");
          }
      res.end("File is uploaded");
    });
});

module.exports = router;