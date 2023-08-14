const router = require("express").Router();
const userPageControllers  = require("../controllers/pageControllers/userPages")
const AdminPageControllers  = require("../controllers/pageControllers/adminPages")
const admin = require("../middleware/admin")

// user pages
router.get('/', userPageControllers.dashboardPage)
router.get('/about', userPageControllers.aboutPage)
router.get('/users/login', userPageControllers.loginUserPage)
router.get('/users/register', userPageControllers.registerPage)
router.get('/users/dashboard', userPageControllers.dashboardUserPage)
router.get('/users/logout', userPageControllers.logoutUserPage)


// admin pages
// router.get('/login/admin', AdminPageControllers.loginAdminPage)
router.get('/admin/login', AdminPageControllers.loginAdminTestPage)
// router.get('/admin/dashboard', admin ,AdminPageControllers.dashboardAdminPage)
router.get('/admin/dashboard', admin ,AdminPageControllers.dashboardAdminPageTest)
// router.get('/admin/register', admin,AdminPageControllers.registerAdminPage)
router.get('/admin/members', admin,AdminPageControllers.userActive)
router.get('/admin/form/trash', admin,AdminPageControllers.uploadTrash)
router.get('/logout', AdminPageControllers.logoutAdminPageTest)






module.exports = router