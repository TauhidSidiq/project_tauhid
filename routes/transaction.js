const router = require("express").Router();
const transactionControllers  = require("../controllers/transactionControllers")
const upload = require("../middleware/multer")
const admin = require("../middleware/admin")

router.post('/api/transaction/add', upload.single("image"), transactionControllers.createTransaction)
router.get('/api/transaction/find', transactionControllers.findtransaction)


module.exports = router
