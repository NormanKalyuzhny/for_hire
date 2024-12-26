import './Todo.css'

export const TodoInput = (props) => {
    const {handleAddTodos, todoValue, setTodoValue} = props
    return(
        <div className='container'>
            <input   
                value={todoValue} 
                type="text" placeholder="Enter todo..."
                onChange={(e) => {
                    setTodoValue(e.target.value)
                }}
            />
            <button 
                className='addBtnStyles' 
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