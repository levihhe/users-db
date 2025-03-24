import express from 'express'
import { initializeDatabase } from './util/database.js'

const app = express()
app.use(express.json())



app.use((req, res, next, err) => {
    if (err) {
        res.status(500).json({message: `Error: ${err.message}`})
    }
})

async function startServer() {
    await initializeDatabase();
    app.listen(3000, ()=> {
        console.log('Server runs on port 3000')
    })
}

startServer()
