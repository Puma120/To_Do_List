import React from 'react'

const Task = ({name, status, onDone, onDelete}) => {
  return (
    <>
      <p style={{ color: status === 'done' ? 'green' : 'red' }}>
        {name}
      </p>
      <div>
        <button onClick={onDone}>Done</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  )
}

export default Task
