import express from "express";
import jwt from 'jsonwebtoken'
import {User} from "../models/user.model.js";

const router = express.Router();

router.post('/auth/sign-up', async (req, res) => {
    const {name, email, password} = req.body
    if (!email || !password) {
        res.json({
            success: false,
            message: 'Please enter email or password'
        })
    } else {
        try {
            await User.create({name, email, password})
            jwt.sign({name, email}, process.env.SECRET, {
                expiresIn: '1h'
            }, (err, token) => {
                if (err) throw new Error(err)

                res.json({
                    success: true,
                    token,
                    message: 'A new user was created'
                })
            })

        } catch (err) {
            res.json({
                message: err.message
            })
        }
    }
})


export default router;