import { useState } from 'react'
import TodoForm from "../src/components/TodoForm";
import TodoItem from "../src/components/TodoItem";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello Redux</h1>
    <TodoForm/>
    <TodoItem/>
    </>
  )
}

export default App
