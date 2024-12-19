import Wrapper from "./Wrapper.jsx";
import Header from "./components/Header/Header.jsx";
import TodoInput from "./components/Todo/TodoInput.jsx";
import TodoList from "./components/Todo/TodoList.jsx";
import TodoContainer from "./components/Todo/TodoContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import DimensionCube from "./components/3D Cube/DimensionCube.jsx";
import Circles from "./components/CircleDance/Circles.jsx";
import ComponentBox from "./ComponentBox.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoValue,  setTodoValue] = useState('')
  const [showSidebar, setShowSidebar] = useState(false)

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos:
      newList
    }))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex)=>{
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(()=>{
    if(!localStorage){
      return 
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])
  
  function handleShowSidebar(){
    setShowSidebar(!showSidebar)
  }

  const stylesMain = {
    display:"inline-block",
    textAlign:"center",
    width:"100%",
    height:"100%",
  }

  return(
    <Wrapper>
      <Header handleShowSidebar={handleShowSidebar}/>
        <div className="mainContent" style={stylesMain}>
          {showSidebar && (
            <Sidebar handleShowSidebar={handleShowSidebar}/>
          )}
          <ComponentBox>
            <TodoContainer>
                <TodoInput 
                  todoValue = {todoValue} 
                  setTodoValue={setTodoValue}
                  handleAddTodos = {handleAddTodos}
                />
                <TodoList 
                  handleDeleteTodo = {handleDeleteTodo} 
                  handleEditTodo = {handleEditTodo}
                  todos = {todos}
                />
            </TodoContainer>
          </ComponentBox>
          <ComponentBox>
            <Circles/>
          </ComponentBox>
          <ComponentBox>
            <DimensionCube/>
          </ComponentBox>  
        </div>
      <Footer/>
    </Wrapper>
  );
}