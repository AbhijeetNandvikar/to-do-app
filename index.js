const express = require('express')
const db = require('./model/taskDocument.js')
const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    db.getTasks().then(msg => res.send(msg))
})

app.post('/task', (req, res) => {
    res.send(db.createTask(`hi`, `hi`, true))
})

app.delete('/:id', (req, res) => {
    res.send(db.deleteTask(req.params.id))
})

port = process.env.port || 3000

app.listen(port, console.log(`Listening on port ${port}`))


// db.deleteTask(`5edde3fdb1efce35306f03f9`);
