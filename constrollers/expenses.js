
const expense = require('../models/expense')

const createExpense = async (req, res, next) => {

    const name = req.body.name;
    const amount = req.body.amount;
    const date = req.body.date;
    const category = req.body.category;

    if (!nameIsValid(name)) {
        res.statusCode = 400
        res.send('Name cannot be empty')
        return
    }

    try {
        const newExpense = await expense.create(name, amount, date, category)
        res.send(newExpense)
    }catch (err) {
        console.log(err)
        res.statusCode = 500
        res.send(err.message)
    }
}

const findExpenseByName = async (req, res, next) => {

    const name = req.body.name

    if (name === '') {
        res.statusCode = 400
        res.send('Name cannot be empty')
    }

    try {
        const expenses = await expense.findByName(name)
        console.log('Response expense', expenses)
        res.send(expenses)
    } catch (err) {
        console.log(err)
        res.statusCode = 500
        res.send(err.message)
    }
}


const getByCategory = async (req, res, next) => {

    try {
        const category = req.body.category
        const getExpenses = await expense.getByCategory(category)
        res.send(getExpenses)
    } catch (err) {
        console.log(err)
        res.statusCode = 500
        res.send(err.message)
    }
}

const showAll = async (req, res, next) => {

    try {
        const allExpenses = await expense.showAll()
        res.send(allExpenses)
    } catch (err) {
        console.log(err)
        res.statusCode = 500
        res.send(err.message)
    }
}

const getTotalAmount = async (req, res, next) => {
    try {
        const total = await expense.getTotalAmount()
        res.send(total)
    } catch (err) {
        console.log(err)
        res.statusCode = 500
        res.send(err.message)
    }
}

const getTotalAmountByCategory = async (req, res, next) => {
    try {
        const category = req.body.category
        const total = await expense.getTotalAmountByCategory(category)
        res.send(total)
    } catch (err) {
        console.log(err)
        res.statusCode = 500
        res.send(err.message)
    }
}


const nameIsValid = (name) => {
    return name !== ''
}




module.exports = { createExpense, findExpenseByName, showAll, getByCategory, getTotalAmount, getTotalAmountByCategory}