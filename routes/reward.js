const router = require("express").Router();
const rewardControllers  = require("../controllers/rewardControllers")

router.post('/api/reward/add', rewardControllers.createReward)


module.exports = router
