export function CreateTodo(){
    return (
        <div>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="Title"></input><br />
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="Description"></input><br />

            <button style={{
                padding: 10,
                margin: 10
            }}>Add Todo</button>
        </div>
    )
}