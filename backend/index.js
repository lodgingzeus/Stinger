import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

import postRoutes from './routes/posts.js'

const app = express()

// makes sure that all postRoutes start with /posts
app.use('/posts', postRoutes)

const CONNECTION_URL = process.env.MONGODB_URL
const PORT = process.env.PORT || 8181

app.use(cors())

app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is now live on port ${PORT} and connected to database`)
    })
})
.catch(err => console.log(err))

