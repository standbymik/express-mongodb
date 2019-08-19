import mongoConnection from '../connectMongo/mongoClient'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

export const getMenberHandler = async (req, res) => {
    return mongoConnection(async (db) => {

        const errors = validatorResult(req)
        if (!errors.isEmpty()) {
            return errorFormat(errors, res)
        }

        const { id, names } = req.query

        const data = await db.collection('forum').find().toArray()

        if (!data) {
            return res.json({ success: false })
        }

        const result = {
            success: true,
            data
        }

        return res.json(result)

    })
}