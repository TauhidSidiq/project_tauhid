const router = require("express").Router();
const cors = require("cors")

const auth = require('./auth')
const page = require('./pages')
const trash = require('./trash')
const benefit = require('./benefit')
const transaction = require('./transaction')
const reward = require('./reward')

router.use(cors())
router.use(auth)
router.use(page)
router.use(trash)
router.use(benefit)
router.use(transaction)
router.use(reward)


module.exports = router
