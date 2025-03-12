import express from "express";
import Product from "../Models/productModel.js";
import Category from "../models/categoryModel.js";


const productRouter = express.Router();


const seedproducts = [
    {
        name: 'Iphone',
        description: 'Lorem ipsum ',
        qty: 30,
        price: 500,
        category: '67ccf92927754667860be585',
        image: 'testwsafi'
    },
    {
        name: 'telephone2',
        description: 'Lorem ipsum ',
        qty: 30,
        price: 500,
        category: '67ccf92927754667860be585',
        image: 'testwsafi'
    },
    {
        name: 'Samsung',
        description: 'Lorem ipsum ',
        qty: 30,
        price: 500,
        category: '67ccf92927754667860be585',
        image: 'testwsafi'
    },
    {
        name: 'Lenovo',
        description: 'Lorem ipsum ',
        qty: 30,
        price: 500,
        category: '67ccf92927754667860be586',
        image: 'testwsafi'
    }

]


productRouter.post('/', async (req, res) => {
    try {
        const products = await Product.insertMany(seedproducts)
        return res.status(200).send(products)
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: error.message
        })
    }
})


productRouter.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        return res.status(200).send(products)
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: error.message
        })
    }
})


productRouter.get('/category/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            res.status(500).send({
                message: "the provided id is not vzlid"
            })
        }
        const products = await Product.find({ category: id})
        return res.status(200).send(products)
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: error.message
        })
    }
})

productRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            res.status(500).send({
                message: "the provided id is not vzlid"
            })
        }
        const products = await Product.findById(id)
        return res.status(200).send(products)
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: error.message
        })
    }
})

export default productRouter
