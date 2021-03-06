import mongoConnection from '../connectMongo/mongoClient'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'
import { bloggang } from 'config'

const blogHandler = async (req, res) => {
    return mongoConnection(async (db) => {

        const errors = validatorResult(req)
        if (!errors.isEmpty()) {
            return errorFormat(errors, res)
        }

        const { id, name } = req.query

        // res.json({ id, name })

        const resultj = await db.collection('members').insertOne({ name: name })
        return res.json({ name })
    })
}

export {
    blogHandler
}