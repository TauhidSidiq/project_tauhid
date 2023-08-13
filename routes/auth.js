const router = require("express").Router();
const adminControllers  = require("../controllers/authControllers")

router.post('/admin/register', adminControllers.register)
router.post('/user/register', adminControllers.registerUser)
router.post('/user/login', adminControllers.loginUser)
router.post('/login', adminControllers.login)


module.exports = router
