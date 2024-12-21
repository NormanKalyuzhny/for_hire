import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodos, todoValue, setTodoValue} = props

    const stylesContainer = {
        display:"flex",
        textAlign: "center",
        height: "45px",
        gap: "10px",
    }
    const inputStyles = {
        height: "2rem",
        borderStyle: "none",
        borderColor: "transparent",
        borderBottom: "2px solid orange",
        backgroundColor: "transparent",
        color: "#FFF",
        outline: "none",
        width: "-webkit-fill-available",
        fontSize: "1.2rem",
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
        height: "2rem",
        width: "4rem",
        borderRadius: "0.3rem",
        marginLeft: "auto",
        fontSize: "1.2rem",
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