const router = require("express").Router();
const cors = require("cors")

const auth = require('./auth')
const page = require('./pages')

router.use(cors())
router.use(auth)
router.use(page)


module.exports = router
