import React from 'react'

export default function TodoCard(props) {

const {children, handleDeleteTodo, index, handleEditTodo} = props
    const styles = {
        display: "flex",
        minHeight: "30px",
        alignItems: "center",
        background: "#325a8d",
        padding: "0.5rem 1rem",
        borderRadius: "0.3rem",
    }

    const icoStyles = {
        display: "flex",
        marginLeft: "auto",
        gap: "10px",
        marginLeft: "auto",
        paddingLeft: "0.5rem",
    }

    const btnUnset = {
        border: "none",
        padding: "0",
        margin: "0",
        background:"transparent",
        color:"unset",
        cursor:"pointer",
        fontSize: "1.2rem",
    }

    return (
        <li style={styles} className='todoItem'>
            {children}
            <div style={icoStyles}className='actionsContainer'>
                <button style={btnUnset} onClick={()=>{
                    handleEditTodo(index)
                }}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button style={btnUnset} onClick={()=>{
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}
