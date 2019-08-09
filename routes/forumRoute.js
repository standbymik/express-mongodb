import express from 'express'
const router = express.Router()
import { blogHandler } from '../models/blogHandler'

router.get('/get_data', blogHandler)

export default router