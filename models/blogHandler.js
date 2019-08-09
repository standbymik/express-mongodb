import mongoConnection from '../connectMongo/mongoClient'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

const blogHandler = async (req, res) => {
    return mongoConnection(async (db) => {

        const errors = validatorResult(req)
        if (!errors.isEmpty()) {
            return errorFormat(errors, res)
        }


        console.log(req.query)
        res.json([])

        // const result = await db.collection('members').insertOne({ name: 'mik' })
        // return res.json({ result })
    })
}

export {
    blogHandler
}