import express from "express";
import jwt from 'jsonwebtoken'
import {User} from "../models/user.model.js";
import verify_token from "../middlewares/verify_token.middleware.js";

const router = express.Router();

router.post('/auth/sign-up', async (req, res) => {
    const {name, email, password} = req.body
    if (!email || !password) {
        res.json({
            success: false, message: 'Please enter email or password'
        })
    } else {
        try {
            const user = await User.create({name, email, password})
            jwt.sign(user.toJSON(), process.env.SECRET, {
                expiresIn: '1h'
            }, (err, token) => {
                if (err) throw new Error(err)

                res.json({
                    success: true, token, message: 'A new user was created'
                })
            })

        } catch (err) {
            res.json({
                message: err.message
            })
        }
    }
})


// get user profile

router.get('/auth/user', verify_token, async (req, res) => {
    try {
        const {decoded} = req.body;
        const user = await User.findById(decoded._id)
        res.json({
            success: true, user
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: err.message,
        })
    }
})

// login
router.post('/auth/sign-in', async (req, res) => {

    try {
        const {email, password} = req.body;
        if (!email || !password) {
            res.status(500).json({
                success: false, message: "Provide email and password"
            })
        }

        // fetch user
        const user = await User.findOne({email})

        if (!user) {
            res.status(500).json({
                success: false, message: "Wrong email"
            })
        }

        const isValid = user.comparePassword(password)

        if (!isValid) {
            res.status(500).json({
                success: false, message: "Wrong password"
            })
        }


        jwt.sign(user.toJSON(), process.env.SECRET, {
            expiresIn: '1h'
        }, (err, token) => {
            if (err) throw new Error(err)

            res.json({
                success: true, token, message: 'Login success'
            })
        })


    } catch (err) {
        res.status(500).json({
            success: false, message: "Unauthenticated"
        })
    }
})

export default router;