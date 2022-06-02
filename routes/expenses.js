const express = require('express');
const res = require('express/lib/response');

const expensesController = require('../constrollers/expenses')

const router = express.Router()


router.post('/create', expensesController.createExpense)

router.get('/search', expensesController.findExpenseByName )

router.get('/holis', () => {
    res.send('holis')
})


router.get('/all', () => {
    console.log('get all expenses')
})

router.get('/id/:id', expensesController.getById)



module.exports = router