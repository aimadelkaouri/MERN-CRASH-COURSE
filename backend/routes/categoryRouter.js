import express from 'express'
import Category from '../models/categoryModel.js'



const categoryRouter = express.Router();

//rajouter les données manuellemets
const seedcategories = [
    {
        name: 'Phones'
    },
    {
        name: 'laptops'
    }
]

categoryRouter.post('/', async (req, res) => {
    try {
        const categories = await Category.insertMany(seedcategories)
        return res.status(200).send(categories)
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: error.message
        })
    }
})




categoryRouter.get('/', async (req, res) => {
    try {
        const categories = await Category.find({})
        return res.status(200).send(categories)
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: error.message
        })
    }
})

export default categoryRouter