const multer = require('multer')

const fileFilter1 = (req, file, cb) => {
  if (file.mimetype == "application/pdf") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ fileFilter: fileFilter1 });

module.exports = upload
