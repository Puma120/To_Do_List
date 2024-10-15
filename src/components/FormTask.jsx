import React, { useState } from 'react'

const FormTask = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask)
      setNewTask('') 
    }
  }

  return (
    <div>
      <label htmlFor="add_task">Add new task: </label>
      <input 
        type="text" 
        id='add_task'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  )
}

export default FormTask
