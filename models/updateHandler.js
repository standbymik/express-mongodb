import mongoConnection from '../connectMongo/mongoClient'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

export const updateHandler = async (req, res) => {
    return mongoConnection(async (db) => { 

        const errors = validatorResult(req)
        if (!errors.isEmpty()) {
            return errorFormat(errors, res)
        }

        const { id, names , newname } = req.query

        let newvalues = { $set:{name: newname} }
        const data = await db.collection('members').updateOne({ name: names } , newvalues )

        const { _id , name } = data
        if(!data){
            return res.json({ success : false})
        }

        return res.json({ success : true , name })

    })
}