import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/ToDoList'
import FormTask from './components/FormTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ToDoList</h1>
      <FormTask/>
      <ToDoList/>
    </>
  )
}

export default App
