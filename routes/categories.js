const express = require('express');

const categoriesController = require('../constrollers/categories')

const router = express.Router()


// show all categories

router.get('/all', categoriesController.showAll)


// create a new category

router.post('/create', categoriesController.createCategory)

module.exports = router