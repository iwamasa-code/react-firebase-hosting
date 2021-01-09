import React, { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  //TODOの更新 データの保存
  const addTodo = (text) => {
    const newTodos = [...todos, { text, complete: false }];
    setTodos(newTodos);
    console.log(newTodos);
  };

  //TODOの削除
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //completeTodoの変更
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, completeTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
};
