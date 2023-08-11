const router = require("express").Router();
const userPageControllers  = require("../controllers/pageControllers/userPages")
const AdminPageControllers  = require("../controllers/pageControllers/adminPages")
const admin = require("../middleware/admin")

// user pages
router.get('/', userPageControllers.dashboardPage)
router.get('/about', userPageControllers.aboutPage)

// admin pages
router.get('/login/admin', AdminPageControllers.loginAdminPage)
router.get('/admin/dashboard', admin ,AdminPageControllers.dashboardAdminPage)
router.get('/admin/register', admin,AdminPageControllers.registerAdminPage)
router.get('/logout', AdminPageControllers.logoutAdminPage)






module.exports = router