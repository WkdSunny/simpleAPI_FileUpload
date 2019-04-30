var multer = require('multer');

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

module.exports = {
    multer: multer,
    storage: storage,
    upload: upload
};