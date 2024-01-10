const express = require('express');
const { createTodo, updateTodo } = require('./types'); // Object destructing way of importing files
const { Todo } = require('./db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({}))

app.post('/todo', async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You send the wrong inputs",
        })
        return;
    }


    // Insert into DBs

    // This should in try catch 
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })

})
app.get('/todos', async (req, res)=>{
    const data = await Todo.find({});
    res.json({
        todos: data
    })
})

app.put('/completed', (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.succes){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    Todo.updateOne({
        _id: parsedPayload.id
    },
    {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
    
})
app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})