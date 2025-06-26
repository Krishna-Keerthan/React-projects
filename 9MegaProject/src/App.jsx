import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
    <h2>Mega Project</h2>
    </>
  )
}

export default App
