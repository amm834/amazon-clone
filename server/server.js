const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')

const app = express()
const server = http.createServer(app)

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