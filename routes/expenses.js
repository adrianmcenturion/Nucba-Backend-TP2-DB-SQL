const express = require('express');

const expensesController = require('../constrollers/expenses')

const router = express.Router()


// create new expense

router.post('/create', expensesController.createExpense)

// search expense by name

router.get('/search/name', expensesController.findExpenseByName )

router.get('/holis', () => {
    res.send('holis')
})

// show all expenses

router.get('/all', expensesController.showAll)

//search expense by id

router.get('/id/:id', expensesController.getById)

// search expense by category

// router.get('/search/category', expensesController.getByCategory )



module.exports = router