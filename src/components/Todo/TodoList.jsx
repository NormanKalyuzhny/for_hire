import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos} = props
    const styles = {
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
    }
  return (
    <ul style={styles} className='todoMain'>
        {todos.map((todo, todoIndex) => {
            return (
                <TodoCard {...props} key={todoIndex} index = {todoIndex}>
                    <p>{todo}</p>
                </TodoCard>
            )
    })}</ul>
  )
}
