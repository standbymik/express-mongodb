import { mongodb } from 'config'
import { MongoClient } from 'mongodb'

const { url, port, dbname } = mongodb
// const { url, port, dbname, username, password } = mongodb

export default async function mongoConnection(callback, errorCallback = null) {

    let conn = null

    try {
        // connection is open once
        if (typeof username === 'undefined' || typeof password === 'undefined') {
            // without authentication
            conn = await MongoClient.connect(`mongodb://${url}:${port}`, { useNewUrlParser: true })
        } else {
            // authenticate DB
            conn = await MongoClient.connect(`mongodb://${username}:${password}@${url}:${port}/${dbname}`, { useNewUrlParser: true })
        }
        return await callback(conn.db(dbname))

    } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Database connection error: ', e)
        if (errorCallback !== null) {
            return errorCallback(e)
        }
    } finally {
        if (conn !== null) {
            conn.close()
            //console.log('Database connection closed')
        }
    }

    return null
}
