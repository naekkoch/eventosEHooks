import React, { useEffect, useState } from "react";
import Lista from "../components/list";
import Form from "../components/form";

const Todo = () => {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleChangeInput = (event) => {
    const inputTask = event.target.value;

    setTask(inputTask);
  };

  const handleAddItemToList = (event) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setTask("");
  };
  
  return (
    <div className="todo-wrapper">
      <h1>Lista de filmes</h1>
       <Form 
       handleAddItemToList={handleAddItemToList}
      handleChangeInput={handleChangeInput}
        task={task}
         />
     <Lista itemsList={itemsList}/>
    </div>
  );
};


export default Todo;