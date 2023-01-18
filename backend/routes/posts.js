import express from 'express'
import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router()

//goes to localhost:8181/posts by default
router.get('/', getPosts)
router.post('/', createPost)

export default router