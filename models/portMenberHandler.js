import mongoConnection from '../connectMongo/mongoClient'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

export const portMenberHandler = async (req, res) => {

    const errors = validatorResult(req)
        if (!errors.isEmpty()) {
            return errorFormat(errors, res)
        }
    return mongoConnection(async (db) => { 

        const { id, names } = req.body

        const data = await db.collection('members').findOne({ name: names })

        const { name } = data

        if(!data){
            return res.json({ success : false})
        }

        return res.json({ success : true , name })

    })
}