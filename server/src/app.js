console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')//allows you to process JSON data very easily
const cors = require('cors')
const morgan = require('morgan')//log generator

const app = express()//builds an express server. The basic web application
app.use(morgan('combined'))//morgan prints out logs
app.use(bodyParser.json())//parse JSON requests that are sent to it
app.use(cors())

app.get('/status', (req, res) => {//http get request
    res.send({
        message: 'hello world!'
    })
})

app.listen(process.env.PORT || 8081)//