const router = require("express").Router();
const cors = require("cors")

const auth = require('./auth')
const page = require('./pages')
const trash = require('./trash')
const transaction = require('./transaction')

router.use(cors())
router.use(auth)
router.use(page)
router.use(trash)
router.use(transaction)


module.exports = router
