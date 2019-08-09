import express from 'express'
const router = express.Router()
import { blogHandler } from '../models/blogHandler'
import { addHandler } from '../models/addHandler'
import { getMenberHandler } from '../models/getMenberHandler'
import { portMenberHandler } from '../models/portMenberHandler'
import { updateHandler } from '../models/updateHandler'
import { deleteHandler} from '../models/deleteHandler'
import { addValidator } from '../middlewares/validator'

router.get('/get_data', addValidator, blogHandler)
router.get('/get_menber' ,addValidator, getMenberHandler)
router.post('/port_menber' ,addValidator, portMenberHandler)

router.post('/update_menber' ,addValidator, updateHandler)

router.get('/delete_menber',addValidator, deleteHandler)

router.post('/add_data', addValidator, addHandler)

export default router