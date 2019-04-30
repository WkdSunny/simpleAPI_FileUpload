var express = require('express');
var multer = require('multer');

var router = express.Router();
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './filesuploaded');
    },
    filename: function (req, file, callback) {
      callback(null, file.originalname + '-' + Date.now());
      console.log({
        'fileinfo': {
          'fieldname': file.fieldname,
          'originalfilename': file.originalname,
          'encoding': file.encoding,
          'mimetype': file.mimetype,
          'size': file.size,
          'destination': file.destination,
          'filename': file.filename,
          'path': file.path,
          'buffer': file.buffer
        }
      });
    }
  });

var upload = multer({ storage : storage}).single('file');

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

