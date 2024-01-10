const mongoose = require('mongoose');


// The string should in env variable
mongoose.connect('mongodb+srv://admin:Test123@cluster0.4upqz2m.mongodb.net/todos');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    Todo: Todo
}
// OR NOTE: Shorter syntax if THE KEY AND THE VALUE ARE THE SAME
/*
module.exports = {
    Todo
}
*/