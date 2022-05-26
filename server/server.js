import express from 'express'
import morgan from 'morgan'
import bodyParser from "body-parser";
import {User} from "./models/user.model.js";
import * as http from 'http'
import mongoose from "mongoose";
import 'dotenv/config';
import productRouter from "./routes/product.router.js";

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

await mongoose.connect(process.env.DATABASE)

app.use('/api', productRouter);


server.listen(3000, () => {
    console.log('Server is running at localhost 3000')
});