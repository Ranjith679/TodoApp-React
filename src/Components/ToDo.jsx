import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const ToDo = () => {
  const inputRef = useRef();
  const [todolist, setTodolist] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  const add = () => {

    const task = inputRef.current.value.trim();
    if (task == "") {
      return null;
    }

    const taskItem = {
      id: Date.now(),
      text: task,
      isComplete: false,
    }

    setTodolist((prev) => [...prev, taskItem]);
    inputRef.current.value = "";
  }

  const deleteItem = (id) => {
    return setTodolist(pre => pre.filter(todo => todo.id !== id))
  }

  const toggle = (id) => {
    setTodolist(prev => {
      return prev.map(todo => {
        if (todo.id == id) {
          return { ...todo, isComplete: !todo.isComplete }
        }
        return todo;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist))

  }, [todolist])
  return (
    <div className=" bg-gradient-to-br from-[#f8a5c2] to-[#c8d6e5] place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-2xl">

      {/*      Title card    */}
      <div className='flex items-center mt-7 gap-2'>
        <img src={todo_icon} alt="" className='w-8' />
        <h1 className=' text-stone-800 text-3xl font-semibold'>Todo List</h1>
      </div>

      {/*      Input     */}
      <div className='flex items-center my-7 bg-white/80 rounded-full'>
        <input type="text" ref={inputRef} placeholder='Add your task' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholder:text-slate-600' />
        <button onClick={add} className='border-none rounded-full bg-[#ff9ff3] w-32 h-14 text-[#222f3e] text-lg font-medium cursor-pointer'>ADD +</button>
      </div>

      {/*     Todos item   */}
      <div>
        {
          todolist.map((task) => {
            return <TodoItems key={task.id} task={task.text} id={task.id} isComplete={task.isComplete} deleteItem={deleteItem} toggle={toggle} />
          })
        }
      </div>
    </div>
  )
}

export default ToDo