import React, { useState } from "react";

const TodoList = (props) => {
    const [task, setTask] = useState("Write your task here!!");
    const [agree, setAgree] = useState(false)

    const handleTask = (e) => {
     console.log(e.target.value)
     setTask(e.target.value)     
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const data = {
          task: task
      }
      console.log("data from todo", data);
      props.handleTodo(data);
      alert("Your List is ready")
    }
  return (
    <>
      <div className="row mx-0 justify-content-center align-items-center d-flex todo">
        <div className="col-11 border border-gray shadow-lg">
            {/* <div className="border border-gray justify-content-center d-flex p-3">
               <input type="date" value={date} name="date" className="px-4 py-3 date"/>
            </div> */}
            <h2 className="text-center">Today's Task</h2>
             {/* <p className="mb-0 text-center"><label for='task' className="lab">Tasks</label></p> */}
             <div className="d-flex justify-content-center py-3">
             <textarea id='task' name="task" value={task} rows="2" cols="80" className="p-3 text" onChange={(e) => handleTask(e)}></textarea>
             {/* <input type="text" name="task" value="todays task" className="in"/> */}
             </div>
             <div className="d-flex justify-content-center pb-3">
                <button type="button" value={agree} className="lab px-5 py-2" onClick={(e) => handleSubmit(e)}>Add</button>
             </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
