const router = require("express").Router();
const benefitControllers  = require("../controllers/benefitControllers")

router.post('/api/benefit/add', benefitControllers.createBenefit)


module.exports = router
