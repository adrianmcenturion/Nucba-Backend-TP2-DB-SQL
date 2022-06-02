const prisma = require('../utils/client');

const create = async (name) => {

    try {
        const newCategory = await prisma.category.create({
            data: {
                name: name,
                    },
                })
                return newCategory
        } catch (err) {
            console.error(err)
            throw new Error(err)
        }
    }

const showAll = async () => {
    try {
        const categories = await prisma.category.findMany()
        return categories
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

const findByName = async (name) => {
    try {
        return await prisma.category.findMany({
            where: {name: name},
        })
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

module.exports = { create, showAll, findByName }