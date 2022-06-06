
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

    if (req.query.name === '') {
        res.statusCode = 400
        res.send('Name cannot be empty')
    }

    try {
        const expenses = await expense.findByName(req.query.name)
        console.log('Response expense', expenses)
        res.send(expenses)
    } catch (err) {
        console.log(err)
        res.statusCode = 500
        res.send(err.message)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const expenseFound = await expense.getById(id)
        res.send(expenseFound)
    } catch (err) {
        console.log(err)
        res.statusCode = 500
        res.send(err.message)
    }
}

// const getByCategory = async (req, res, next) => {

//     if (req.query.name === '') {
//         res.statusCode = 400
//         res.send('Category name cannot be empty')
//     }

//     try {
//         const expenses = await expense.findByName(req.query.name)
//         console.log('Response expense', expenses)
//         res.send(expenses)
//     } catch (err) {
//         console.log(err)
//         res.statusCode = 500
//         res.send(err.message)
//     }
// }

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


const nameIsValid = (name) => {
    return name !== ''
}




module.exports = { createExpense, findExpenseByName, getById, showAll,  }