import React from 'react'
import tick from '../assets/tick.png'
import untick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ task, id, isComplete ,deleteItem ,toggle }) => {
  return (
    <div className=' flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img onClick={()=>toggle(id)} src={isComplete ? tick : untick} alt="" className='w-6 hue-rotate-300' />
        <p onClick={()=>toggle(id)} className={`text-[#222f3e] ml-4 text-[17px] ${isComplete ? "line-through decoration-[#fad390] decoration-2" : "" }`}>{task}</p>
      </div>
      <img onClick={()=>deleteItem(id)} src={delete_icon} alt="" className='w-3.5 cursor-pointer' />
    </div>
  )
}

export default TodoItems