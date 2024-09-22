import React from 'react'
import { MdClose } from 'react-icons/md';
import { useSelector } from 'react-redux'

const TodosList = () => {
  const list = useSelector(state=> state.todos.todos);

  return (
    <ul className='todos-list'>
    {list.map((todo) => (
      <li key={Math.random() * 100} className="todos_container">
        <input
        className="checkbox"
          type="checkbox"
        />
        <p className="text">{todo.description}</p>
        <button className="btn_delete">
          <MdClose size={24} />
        </button>
      </li>
    ))}
  </ul>
  )
}

export default TodosList