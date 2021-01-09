import React, { useState, useContext } from "react";
import { Form, InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import { TodosContext } from "../contexts/TodosContext";

export const TodoForm = () => {
  const [value, setValue] = useState("");
  const { addTodo } = useContext(TodosContext);

  //TODOの追加
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button type="submit" color="primary">
            追加
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};
