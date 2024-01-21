const router = require('express').Router()
const categoryController = require('../controllers/categoryController')

router.post("/", categoryController.createCategory)

router.get("/", categoryController.getAllCategory)

router.get("/random", categoryController.getRandomCategory)

module.exports = router