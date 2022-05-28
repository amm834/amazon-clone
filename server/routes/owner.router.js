import express, {Router} from "express";
import {Owner} from "../models/owner.model.js";
import {upload} from "../middlewares/photo_upload.middleware.js";


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

router.post('/owners', upload.single('photo'), async (req, res) => {
    try {
        // append file
        req.body.photo = `http://localhost:3000/uploads/${req.file.filename}`
        const {name, about, photo} = req.body;
        await Owner.create({name, about, photo})
        res.json({
            success: true,
            message: 'Successfully a owner was created',
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

export default router;