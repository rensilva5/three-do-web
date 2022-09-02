import { List, Switch } from "antd";

export default function TodoListCard({ item, setError, setLoading, setTaskList }) {
    const handleSwitch = () => {
        // make a patch request to the API
        setLoading(true)
        const body = { done: !item.done}
        
        // fetch(`http://localhost:5555/task/${item.id}`, {
        fetch(`https://three-do-api-bc.web/task/${item.id}`, {
            method: 'PACTH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            setTaskList(data)
            setError('')
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }
    return (
        <List.Item key={item.id}>
            <List.Item.Meta
                avatar={<Switch
                  onChange={() => handleSwitch()}
                  checked={item.done}
                  />}
                title={<p>{item.task}</p>}
              />
            </List.Item>
    )
}