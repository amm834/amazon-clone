import express from "express";
import {Product} from "../models/product.model.js";
import {upload} from "../middlewares/photo_upload.middleware.js";


const router = express.Router();


router.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
            .populate('owner_id')
            .populate('category_id')
        res.json({
            success: true, products
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: err.message
        })
    }
})


router.post('/products', upload.single('photo'), async (req, res) => {
    try {
        // append file
        req.body.photo = `http://localhost:3000/uploads/${req.file.filename}`
        const {title, description, price, photo, stockQuantity, category, owner_id} = req.body;

        await Product.create({title, description, price, photo, stockQuantity, category, owner_id})
        res.json({
            success: true, message: 'Product successfully saved'
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: err.message
        })
    }
})

router.get('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
            .populate('category_id')
            .populate('owner_id')
        res.json({
            success: true, product
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: err.message
        })
    }
})

// update
router.put('/products/:id', upload.single('photo'), async (req, res) => {
    try {
        // append file
        req.body.photo = `http://localhost:3000/uploads/${req.file.filename}`
        const {id} = req.params;
        const {title, description, price, photo, stockQuantity, category_id, owner_id} = req.body;
        const product = await Product.findByIdAndUpdate(id, {
            title,
            description,
            price,
            photo,
            stockQuantity,
            category_id,
            owner_id,
        }, {
            upsert: true
        });

        res.json({
            success: true,
            product
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: err.message
        })
    }
})


router.delete('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.json({
            success: true, message: 'Product was deleted'
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: err.message
        })
    }
})


export default router;