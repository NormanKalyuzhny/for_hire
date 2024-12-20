import Wrapper from "./Wrapper";
import Header from "./components/Header/Header";
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";
import TodoContainer from "./components/Todo/TodoContainer";
import Footer from "./components/Footer/Footer";
import DimensionCube from "./components/3D Cube/DimensionCube";
import Circles from "./components/CircleDance/Circles";
import ComponentBox from "./ComponentBox";
import Sidebar from "./components/Sidebar/Sidebar";
import APIFetch from "./components/APIFetch";
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
    display: "flex",
    flexFlow:"wrap",
    alignSelf: "center",
    justifyContent:"center",
    width:"70%",
    margin: "0 0.5rem",
    boxSizing: "border-box",
  }

  return(
    <Wrapper>
      <Header handleShowSidebar={handleShowSidebar}/>
        <div className="mainContent" style={stylesMain}>
          {showSidebar && (
            <Sidebar handleShowSidebar={handleShowSidebar}/>
          )}
          <ComponentBox>
            <APIFetch/>
          </ComponentBox>  
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