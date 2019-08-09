import mongoConnection from '../connectMongo/mongoClient'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

export const deleteHandler = async (req, res) => {
    return mongoConnection(async (db) => { 

        const errors = validatorResult(req)
        if (!errors.isEmpty()) {
            return errorFormat(errors, res)
        }

        const { id, names , newname } = req.body

        let  myquery = {name: names}
        const data = await db.collection('members').deleteOne(myquery)

        const { name } = data
        if(!data){
            return res.json({ success : false})
        }

        return res.json({ success : true , name })

    })
}