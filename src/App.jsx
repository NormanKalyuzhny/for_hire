import Header from "./components/Header/Header.jsx";
import TodoInput from "./components/Todo/TodoInput.jsx";
import TodoList from "./components/Todo/TodoList.jsx";
import TodoContainer from "./components/Todo/TodoContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import DimensionCube from "./components/3D Cube/DimensionCube.jsx";
import Circles from "./components/CircleDance/Circles.jsx";
import ComponentBox from "./ComponentBox.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import APIFetch from "./components/APIFetch.jsx";
import SVGNameAnimation from "./components/SVGNameAnimation/SVGNameAnimation.jsx";
import AuthPage from "./components/AuthPage/AuthPage.jsx";
import DarkMode from "./components/DarkMode/DarkMode.jsx";
import useLocalStorage from "use-local-storage";
import Droid from "./components/DroidRun/Droid.jsx";
import Page1 from "./components/Pages/Page1.jsx";
import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";
import { useState, useEffect } from "react";
import Card from "./components/Card/Card.jsx";
import DigitalClock from "./components/DigitalClock/DigitalClock.jsx";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  function handleShowSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className="wrapper" data-theme={isDark ? "light" : "dark"}>
      <Page1 />
      <Header handleShowSidebar={handleShowSidebar} />
      <DarkMode isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <SVGNameAnimation />
      <div className="mainContent">
        {showSidebar && <Sidebar handleShowSidebar={handleShowSidebar} />}
        <ComponentBox title="APIFetch">
          <APIFetch />
        </ComponentBox>
        <ComponentBox title="Todo">
          <TodoContainer>
            <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
            <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />
          </TodoContainer>
        </ComponentBox>
        <ComponentBox title="CSS">
          <ProfileCard />
        </ComponentBox>
        <ComponentBox title="Simple version">
          <Card />
        </ComponentBox>
        <ComponentBox title="CSS">
          <DimensionCube />
        </ComponentBox>
        <ComponentBox title="CSS">
          <Circles />
        </ComponentBox>
        <ComponentBox title="Authorization">
          <AuthPage />
        </ComponentBox>
        <ComponentBox title="Digital Clock">
          <DigitalClock />
        </ComponentBox>
        <Droid />
      </div>
      <Footer />
    </div>
  );
}
