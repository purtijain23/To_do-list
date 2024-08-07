import React from "react";

const List = (props) => {
  return (
    <>
      <div className="row mx-0 justify-content-center list">
        <div className="col-11">
          <h2>MY LIST</h2>

          {props.arr.map((items) => (
            <ul>
              <li>{items.task}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
