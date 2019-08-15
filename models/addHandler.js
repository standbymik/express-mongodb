import mongoConnection from '../connectMongo/mongoClient'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

const addHandler = async (req, res) => {
    return mongoConnection(async (db) => {

        const errors = validatorResult(req)
        if (!errors.isEmpty()) {
            return errorFormat(errors, res)
        }

        const { title, name, content } = req.body

        const data = {
            title,
            name,
            content,
            created_time: new Date()
        }

        db.collection('forum').insertOne(data)

        res.json(req.body)

        // const result = await db.collection('members').insertOne({ name: 'mik' })
        // return res.json({ result })
    })
}

export {
    addHandler
}