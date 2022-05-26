import express, {Router} from "express";
import {Owner} from "../models/owner.model.js";


const router = express.Router();
router.get('/owners', async (req, res) => {
    try {
        const owners = await Owner.find()
        res.json({
            success: true,
            owners
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: err.message
        })
    }
})

router.post('/owners', async (req, res) => {
    try {
        const {name, about} = req.body;
        await Owner.create({name, about})
        res.json({
            success: true,
            message: 'Successfully a owner was created',
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: err.message
        })
    }
})

export default router;