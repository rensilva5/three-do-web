import { useState } from 'react'
import { Input } from 'antd'
const { Search } = Input


export default function AddTask( { setTasklist }) {
    const [task, setTask] = useState('')
    const addTask = () => {
        fetch('http://localhost:5555/tasks', {
        method: 'POST',
        made: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task, done: false })
    })
        .then(result => result.json())
        .then(data => {
        setTasklist(data)
    setTask('')
    })
    .catch(console.error)
}
    return (
        <Search
        value={task}
        onChange={e => setTask(e.target.value)}
        enterButton="Add"
        size="Large"
        onSearch={addTask} 
        />       
    )
    }
