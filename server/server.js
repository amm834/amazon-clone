const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const mongoose = require("mongoose");

const app = express()
const server = http.createServer(app)

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/amazon_clone')
    console.log('Connected to database')
}

connect().catch(err => console.log(err));

app.use(morgan('dev'))
app.use(bodyParser.json({
    extended: true
}));


app.get('/', (req, res) => {
    res.json({
        'message': 'Hello World'
    })
});

app.post('/', (req, res) => {
    console.log(req.body)
})

server.listen(3000, () => {
    console.log('Server is running')
});