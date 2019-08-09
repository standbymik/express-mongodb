import Connection from '../connectMongo/mongoClient'

const blogHandler = async (req, res) => {
    return Connection(async (db) => {

        const result = await db.collection('members').insertOne({ name: 'mik' })
        return res.json({ result })
    })
}

export {
    blogHandler
}