import {Router} from "express";
import {Category} from "../models/category.model.js";

const router = new Router();


router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json({
            success: true,
            categories
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

router.post('/categories', async (req, res) => {
    {
        try {
            const {type} = req.body;
            await Category.create({type})
            res.json({
                success: true,
                message: "Successfully created a new category"
            })

        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
})

export default router;