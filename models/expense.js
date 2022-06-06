const prisma = require('../utils/client');

const create = async (name, amount, date, categoryId) => {
    
    try {
        const newExpense = await prisma.expense.create({
            data: {
                name: name,
                amount: amount,
                date: date,
                category: {
                    connect: {
                        id: categoryId
                    }
                }
            }
        })  
        return newExpense
    }catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

const findByName = async (name) => {

    try {
        const expenses = await prisma.expense.findMany({
            where: {
                name: name
            },
            select: {
                name: true,
                amount: true,
                createdAt: true,
                category: true
            }
        })
        return expenses
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }

}


const getByCategory = async (category) => {
    try {
        const expenses = await prisma.expense.findMany({
            where: {
                categoryId: category,
            },
            select: {
                name: true,
                amount: true,
                createdAt: true,
            },
        })
        return expenses

    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}



const showAll = async () => {
    try {
        const expenses = await prisma.expense.findMany({
             
        })
        return expenses
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

const getTotalAmount = async () => {

    try {
        const expenses = await prisma.expense.findMany()

        let initialValue = 0

        let total = expenses.reduce((acc, currentValue) => { return acc + currentValue.amount }, initialValue)

        return `Total expenses: $${total}`

    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

const getTotalAmountByCategory = async (category) => {

    const expenses = await prisma.expense.findMany({
        where: {
            categoryId: category,
        },
        select: {
            name: true,
            amount: true,
            createdAt: true,
        }
    })

    let initialValue = 0

    let total = expenses.reduce((acc, currentValue) => { return acc + currentValue.amount }, initialValue)

    return `Total expenses: $${total}`

}

module.exports = { create, findByName, showAll, getByCategory, getTotalAmount, getTotalAmountByCategory }