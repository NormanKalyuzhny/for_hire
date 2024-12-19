import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodos, todoValue, setTodoValue} = props

    const stylesContainer = {
        display:"flex",
        textAlign: "center",
        height: "35px",
        gap: "10px",
    }
    const inputStyles = {
        height: "25px",
        borderStyle: "none",
        borderColor: "transparent",
        borderBottom: "2px solid orange",
        backgroundColor: "transparent",
        color: "#FFF",
        outline: "none",
        width: "-webkit-fill-available",
    }
    const addBtnStyles = {
        border: "none",
        padding: "0",
        margin: "0",
        background: "#dd8629",
        font: "inherit",
        color: "inherit",
        outline: "none",
        cursor: "pointer",
        height: "25px",
        width: "4rem",
        borderRadius: "0.3rem",
        marginLeft: "auto",
    }
    return(
        <div style={stylesContainer} className="inputContainer">
            <input 
                style={inputStyles} 
                value={todoValue} 
                type="text" placeholder="Enter todo..."
                onChange={(e) => {
                    setTodoValue(e.target.value)
                }}
            />
            <button 
                style={addBtnStyles} 
                onClick={()=>{
                    if(todoValue == ''){
                        return
                    }
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }}><b>+</b>
            </button>
        </div>
    )
}