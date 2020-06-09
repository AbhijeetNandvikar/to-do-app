const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abhijeet:ABHIJEET@cluster0-23mjp.mongodb.net/Tasks?retryWrites=true&w=majority')
    .then(console.log('connected to db'))
    .catch(err => console.log(err))

const taskSchema = mongoose.Schema({
    title: String,
    desc: String,
    status: Boolean,
    time: Date,
})

const taskDocument = mongoose.model('Tasks', taskSchema)

// creating new tasks
async function createTask(t, d, s) {
    const newTask = new taskDocument({
        title: t,
        desc: d,
        status: s,
        time: Date.now(),
    })
    return await newTask.save()

}

// createTask()


// accessing the document

async function getTasks() {
    return await taskDocument.find({})
}


// Updating the documents 

async function updateTask(id, t, d, s) {
    return await taskDocument.update(
        {
            _id: `${id}`
        },
        {
            title: t,
            desc: d,
            status: s,
            time: Date.now(),
        })

}

// updateTask(`5ed09d6b5e538e23b05b1252`)

async function deleteTask(id) {
    return await taskDocument.deleteOne({
        _id: `${id}`
    })

}

// deleteTask(`5ed09d6b5e538e23b05b1252`);

// Exporting taskDocument

module.exports = { taskDocument, getTasks, createTask, updateTask, deleteTask };