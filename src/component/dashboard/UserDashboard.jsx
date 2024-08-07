import React, { useState } from "react";
import TodoList from "../TodoList";
import List from "../List";

const UserDashboard = () => {
  // const [userlist, setUserlist] = useState(' ')
  // const [arr, setArr] = useState([])

  const [input, setInput] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEdittodo] = useState(null);

  // const handleTodo = (data) => {
  //   console.log("data from parent", data);
  //   // setArr([...arr, data]);
  // };
  return (
    <>
      <div className="row mx-0 user justify-content-center">
        <div className="col-11">
          <h1 className="text-center pt-5">MY TO DO LIST</h1>
          <hr className="w-50 mx-auto pb-5" />
        </div>
        <div className="row mx-0">
          <div className="col-6">
            <TodoList
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              setEdittodo={setEdittodo}
              editTodo={editTodo}
            />
          </div>
          <div className="col-6">
            <List todos={todos} setTodos={setTodos} setEdittodo={setEdittodo}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
