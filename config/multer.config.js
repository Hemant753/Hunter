import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/image/products');
    },
    filename: function (req, file, cb) {

        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.originalname + "-" + uniqueSuffix);
    }
  })
  
const upload = multer({ storage: storage })

export default upload;