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

router.get('/', expensesController.showAll)


// search expense by category

router.get('/search/category', expensesController.getByCategory )

// get total expenses

router.get('/total', expensesController.getTotalAmount)

// get total amount by category

router.get('/total/category', expensesController.getTotalAmountByCategory )



module.exports = router