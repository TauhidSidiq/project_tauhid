const router = require("express").Router();
const rewardControllers  = require("../controllers/rewardControllers")

router.post('/api/reward/add', rewardControllers.createReward)
router.get('/api/reward/find', rewardControllers.findReward)
router.get('/api/reward/delete/:id', rewardControllers.deleteReward)


module.exports = router
