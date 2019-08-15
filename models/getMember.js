import mongoConnection from '../connectMongo/mongoClient'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

const getMember = async (req, res) => {
    return mongoConnection(async (db) => {

        const errors = validatorResult(req)
        if (!errors.isEmpty()) {
            return errorFormat(errors, res)
        }

        const result = await db.collection('members').find().toArray()
        
        const data = {
            success: true,
            data: result
        }

        return res.json(data)
    })
}

export {
    getMember
}