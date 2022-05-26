import express from 'express'
import morgan from 'morgan'
import bodyParser from "body-parser";
import {User} from "./models/user.model.js";
import * as http from 'http'
import mongoose from "mongoose";
import 'dotenv/config';

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

await mongoose.connect(process.env.DATABASE)


app.get('/', (req, res) => {
    res.json({
        'message': 'Hello World'
    })
});

app.post('/', async (req, res) => {
    const {name, email, password} = req.body;
    const user = await User.create({name, email, password});
    res.json(user);
})

server.listen(3000, () => {
    console.log('Server is running at localhost 3000')
});