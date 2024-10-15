import React, { useState } from 'react'
import Task from './Task'
import FormTask from './FormTask'

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {name: 'Task1', status: 'pending'},
    {name: 'Task2', status: 'pending'},
    {name: 'Task3', status: 'pending'}
  ])

  const addTask = (taskName) => {
    const newTask = { name: taskName, status: 'pending' }
    setTasks([...tasks, newTask])
  }

  const markTaskAsDone = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, status: 'done' } : task
    )
    setTasks(updatedTasks)
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          name={task.name} 
          status={task.status}
          onDone={() => markTaskAsDone(index)}
          onDelete={() => deleteTask(index)}
        />
      ))}
      <FormTask onAddTask={addTask} />
    </div>
  )
}

export default ToDoList
