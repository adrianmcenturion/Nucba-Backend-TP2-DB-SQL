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
        const expenses = await prisma.expenses.findMany({
            include: {
                category: true
            },
            where: {
                name: name
            },
        })
        return expenses
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }

}

const getById = async (id) => {
    try {
        return await prisma.expenses.findUnique({
            where: {
                id: id
            },
            include: {
                category: true
            },
        })
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

module.exports = { create, findByName, getById}