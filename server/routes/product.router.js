import {Router} from "express";
import {Product} from "../models/product.model.js";


const router = new Router();

router.post('/products', async (req, res) => {
    try {
        const {title, description, price, photo, stockQuantity} = req.body;
        await Product.create({title, description, price, photo, stockQuantity})
        res.json({
            success: true,
            message: 'Product successfully saved'
        })
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
})

export default router;