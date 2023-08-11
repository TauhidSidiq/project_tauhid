const router = require("express").Router();
const adminControllers  = require("../controllers/authControllers")

router.post('/admin/register', adminControllers.register)
router.post('/login', adminControllers.login)


module.exports = router
