import React, { useEffect, useState } from "react";
import { v4 as uuidv4} from "uuid";

const TodoList = ({ input, setInput, todos, setTodos, editTodo, setEdittodo }) => {
    
    const updateTodo = (title, id, completed) => {
      const newTodo = todos.map((todo) => 
        todo.id === id ? { title, id, completed } : todo
      );
      setTodos(newTodo)
      setEdittodo(" ")
    }

    useEffect(() => {
      if(editTodo){
        setInput(editTodo.title);
      }else{
        setInput(" ")
      }
    }, [setInput, editTodo]) 

    const handleTask = (e) => {
     console.log(e.target.value)
     setInput(e.target.value)     
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if(!editTodo){
        setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
      setInput(" ");
      }else{
        updateTodo(input, editTodo.id, editTodo.completed)
      }
      // const data = {
      //     task: task
      // }

      // console.log("data from todo", data);
      // props.handleTodo(data);
      // alert("Your List is ready")
    }
   
   
  return (
    <>
      <div className="row mx-0 justify-content-center align-items-center d-flex todo">
        <div className="col-11 border border-gray shadow-lg">
           
            <h2 className="text-center">Today's Task</h2>
             <div className="d-flex justify-content-center py-3">
             <textarea id='task' name="task" value={input} rows="2" cols="80" className="p-3 text" onChange={(e) => handleTask(e)}></textarea>
             </div>
             <div className="d-flex justify-content-center pb-3">
                <button type="submit" className="lab px-5 py-2" onClick={(e) => handleSubmit(e)}>Add</button>
             </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
