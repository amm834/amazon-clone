import express from 'express'
import morgan from 'morgan'
import bodyParser from "body-parser";
import {User} from "./models/user.model.js";
import * as http from 'http'
import mongoose from "mongoose";
import 'dotenv/config';
import productRouter from "./routes/product.router.js";
import categoryRouter from "./routes/category.router.js";
import ownerRouter from "./routes/owner.router.js";
import cors from 'cors'
import authRouter from "./routes/auth.router.js";

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

await mongoose.connect(process.env.DATABASE)


app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', ownerRouter);
app.use('/api', authRouter);


server.listen(3000, () => {
    console.log('Server is running at localhost 3000')
});