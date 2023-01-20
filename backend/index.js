import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

import postRoutes from './routes/posts.js'

const app = express()
app.use(cors())

const CONNECTION_URL = process.env.MONGODB_URL
const PORT = process.env.PORT || 8181


app.use(express.json({limit: '30mb'}));
app.use(express.urlencoded({limit: '30mb', extended: true}));

// makes sure that all postRoutes start with /posts
app.use('/posts', postRoutes)

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is now live on port ${PORT} and connected to database`)
    })
})
.catch(err => console.log(err))

