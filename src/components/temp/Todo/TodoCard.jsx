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

  // const [todos, setTodos] = useState([]);
  // const [todoValue, setTodoValue] = useState("");
  // const [showSidebar, setShowSidebar] = useState(false);
 
  // function persistData(newList) {
  //   localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  // }

  // function handleAddTodos(newTodo) {
  //   const newTodoList = [...todos, newTodo];
  //   persistData(newTodoList);
  //   setTodos(newTodoList);
  // }

  // function handleDeleteTodo(index) {
  //   const newTodoList = todos.filter((todo, todoIndex) => {
  //     return todoIndex !== index;
  //   });
  //   persistData(newTodoList);
  //   setTodos(newTodoList);
  // }

  // function handleEditTodo(index) {
  //   const valueToBeEdited = todos[index];
  //   setTodoValue(valueToBeEdited);
  //   handleDeleteTodo(index);
  // }

  // useEffect(() => {
  //   if (!localStorage) {
  //     return;
  //   }
  //   let localTodos = localStorage.getItem("todos");
  //   if (!localTodos) {
  //     return;
  //   }
  //   localTodos = JSON.parse(localTodos).todos;
  //   setTodos(localTodos);
  // }, []);

  // function handleShowSidebar() {
  //   setShowSidebar(!showSidebar);
  // }