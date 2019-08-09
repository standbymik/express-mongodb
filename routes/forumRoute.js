import express from 'express'
const router = express.Router()
import { blogHandler } from '../models/blogHandler'
import { addValidator } from '../middlewares/validator'

router.get('/get_data', addValidator, blogHandler)

export default router