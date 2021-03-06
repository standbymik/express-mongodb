import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import forumRoute from './routes/forumRoute'
import { getMember } from './models/getMember'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/forum', forumRoute)

app.get('/', (req, res) => {
    res.json({ success: true })
})

app.get('/get_member', getMember)

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})