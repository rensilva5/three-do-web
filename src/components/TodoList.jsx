import { useEffect } from "react"

export default function TodoList ({tasklist, setTasklist}) {
    // call the api ansd sue setaslit to fill in state
    useEffect(() => {
        // fetch('https://three-do-api-rs.web.app/tasks')
        fetch('http://localhost:5555https://three-do-api-rs.web.app/tasks')
            .then(result => result.json())
            .then(tasks => setTasklist(tasks))
            .catch(console.error)
    }, []);
    if(!tasklist) {
        return <h2>No tasks to complete!</h2>
    }
    return
    <ul>
        {tasklist.map(task => (
            <li key={task.id}>{task.task}</li>
        ))}
    </ul>
}