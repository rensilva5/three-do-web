import { useEffect, useState } from "react";
import { List, Alert } from "antd";
import TodoListCard from "./TodoListCard";

export default function TodoList({ tasklist, setTasklist, token }) {
  const [loading, setLoading ] = useState(true)
  const [error, setError] = useState()
  // call the api and use setTaskLits to fill in state
  useEffect(() => {
    // fetch('https://three-do-api-rs.web.app/tasks', {
    fetch('http:localhost:/tasks', {
      heasders: {
        'Authorization': token,
      }
    })
      .then(results => results.json())
      .then(tasks => {
        setTasklist(tasks)
        setLoading(false)
        setError('')
      })
      .catch(err => {
        setError(err.mesage)
        setLoading(false)
      });
  }, [token, setTasklist, setLoading, setError]);
  return (
    <>
    {error && token} <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
        />
    <div className='task-list'>
        <List
          dataSource={tasklist}
          loading={loading}
          renderItem={(item) => (
            <TodoListCard 
            key={item.id}
            item={item}
            token={token}
            setLoading={setLoading}
            setTasklist={setTasklist}
            setError={setError}
            />
          )}
        />
      </div>
    </>
  );
}
