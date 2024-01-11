import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [ description, setDescription ] = useState("");
    return (
        <div>
            <input onChange={function(e){
                setTitle(e.target.value);
            }} style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="Title"></input><br />

            <input onChange={function(e){
                setDescription(e.target.value);
            }} style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="Description"></input><br />

            <button onClick={function(){
                fetch("http://localhost:3000/todo",{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers:{
                        "Content-type": "application/json"
                    }
                })
                    .then(async function(data){
                        const json = await data.json();
                        alert("Todo added");
                    })
            }} style={{
                padding: 10,
                margin: 10
            }}>Add Todo</button>
        </div>
    )
}