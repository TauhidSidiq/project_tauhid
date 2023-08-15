const router = require("express").Router();
const trashControllers  = require("../controllers/trashControllers")

router.post('/api/trash/add', trashControllers.CreateTrash)


module.exports = router
