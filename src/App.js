import { useEffect, useState } from 'react'
import "./style.css";

const taskList = [
  {
    id: 1,
    title: 'Tasks',
    status: 'active',
    description: 'Quét nhà',
    checked: false
  },
  {
    id: 2,
    title: 'Tasks',
    status: 'active',
    description: 'Rửa bát',
    checked: false

  },
  {
    id: 3,
    title: 'Tasks',
    status: 'active',
    description: 'Học code',
    checked: false

  },
]

function Content() {
  // TODO: Rename useState Hooks below
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(taskList)
  const [checked, setChecked] = useState([])

  // TODO: Rename function below
  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: 'Tasks',
      status: 'active',
      description: task
    }
    if (task) {
      setTasks([...tasks, newTask])
      setTask('')
    } else {
      alert('Please enter task')
    }
  }

  const handleDelete = (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }
  // TODO: Refactor prev -> checked and show tasks by description
  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        document.getElementsByTagName('tr')[id].style.textDecoration = 'none';
        return checked.filter((item) => item !== id);
      }
      else {
        document.getElementsByTagName('tr')[id].style.textDecoration = 'line-through';
        return [...prev, id];
      }
    });
  }

  return (
    <div>
      <h1>Task Manager</h1>
      // TODO: Write input component
      <input type="text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)} />
      // TODO: Write button component
      <button onClick={addTask}>Add</button>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Description</th>
            <th>Check</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>{task.description}</td>
              <td>
                <input
                  type="checkbox"
                  checked={checked.includes(task.id)}
                  onChange={() => handleCheck(task.id)}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Tasks Done: {JSON.stringify(checked)}</p>
    </div>
  )
}
export default Content