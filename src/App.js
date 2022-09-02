import { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd' 
import TodoList from './components/TodoList'
import AddTask from './components/AddTask'
// import SignUp from './components/SignUp'
import SignUp from './components/SignUp'
import './App.css'

const { Header, Content, Footer } = Layout

function App() {
  const [tasklist, setTasklist] = useState()
  const [token, setToken] = useState()
  useEffect(() => {
    if(localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [setToken])
  return(
    <Layout className="layout">
      <Header>
        {/* <div className="logo" /> */}
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Three-Do</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Sign Up</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">
          <h1>Three-do</h1>
          <TodoList token={token} tasklist={tasklist} setTasklist={setTasklist} />
          <AddTask token={token} setTasklist={setTasklist} />
          {/* {!token && <SignUp setToken={{setToken}}/>} */}
          {!token &&
            isUser
            ? <login setIsUser></login>}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Three-Do ©2022 Created by Renzo Silva
      </Footer>
    </Layout>
    // <>
    //  <h1>Three-do</h1>
    //  <TodoList tasklist={tasklist} setTasklist = {setTasklist}/>
    //  <AddTask setTasklist = {setTasklist}/>
    // </>
  )
}

export default App