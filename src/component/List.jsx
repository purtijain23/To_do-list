import React from "react";

const List = ({ todos, setTodos, setEdittodo }) => {
 const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id));  
 }

 const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdittodo(findTodo);
 }
  return (
    <>
      <div className="row mx-0 justify-content-center list">
        <div className="col-11">
          <h2>MY LIST</h2>

          {todos.map((todo) => (
           <li className="m-2 d-flex" key={todo.id}>
            <input type="text" value={todo.title} onChange={(e) => e.preventDefault()}/>
            <div className="d-flex">
              <button type="button" onClick={() => handleEdit(todo)}><i className="fa fa-edit"/></button>
              <button type="button" onClick={() => handleDelete(todo)}><i className="fa fa-trash"/></button>
            </div>
           </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
