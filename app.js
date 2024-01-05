const express = require('express');
const app = express();
const routes = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/not-found')

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks',routes)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = 3000


const start = async()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`THe db est connected successfull as the server on ${port}... is banging`))
    } catch (error) {
    console.log('error');
    }
}

start()