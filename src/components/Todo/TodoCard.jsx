import React from 'react'
import './Todo.css'

export default function TodoCard(props) {

const {children, handleDeleteTodo, index, handleEditTodo} = props
   
    return (
        <li className='todoItem'>
            {children}
            <div className='icoStyles actionsContainer'>
                <button className='btnUnset' onClick={()=>{
                    handleEditTodo(index)
                }}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button className='btnUnset' onClick={()=>{
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}
