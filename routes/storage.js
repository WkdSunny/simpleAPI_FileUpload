var express = require('express');
var multer = require('multer');

var router = express.Router();
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, '../filesuploaded');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now());
    }
  });

var upload = multer({ storage : storage}).single('file');

router.get('/', function(req, res, next) {
    res.render('upload', { title: 'API - File Upload' });
    //res.send('reached');
  });

router.post('/',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

module.exports = router;

