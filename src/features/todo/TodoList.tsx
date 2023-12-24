import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '~/components/Button';
import Form from '~/components/form';
import Ul from '~/components/ul';

interface Todo {
  id: number;
  title: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') ?? '[]'));
  const [todo, setTodo] = useState<string>('');
  const [updatedTodo, setUpdatedTodo] = useState<Todo | null>(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!todo) return;
    console.log('todo -', todo);
    if (updatedTodo) {
      const newTodos = todos.map((todo_item) => {
        if (todo_item.id === updatedTodo.id) {
          return {
            ...todo_item,
            title: todo,
          };
        }
        return todo_item;
      });
      setTodos([...newTodos]);
      setTodo('');
      setUpdatedTodo(null);
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todo,
    };

    setTodos([...todos, newTodo]);
    setTodo('');
  };

  const handleUpdate = (id: number) => {
    console.log('edit');
    const newTodo = todos.find((todo) => todo.id === id);

    setTodo(newTodo?.title ?? '');
    setUpdatedTodo(newTodo ?? null);
    // handleUpdate()
  };

  const handleDelete = (id: number) => {
    console.log('delete');
    const deletedTodo = todos.filter((item) => item.id !== id);
    setTodos(deletedTodo);
  };

  return (
    <>
      <div className="add_todo_input">
        <Form onSubmit={handleSubmit}>
          <Form.Input value={todo} onChange={onHandleChange} placeholder="Add Todo" />
          <Form.Button className="" onClick={() => {}} type="submit">
            {updatedTodo ? 'Update Todo' : 'Add Todo'}
          </Form.Button>
        </Form>
      </div>
      <div className="search_todo_input">
        <Form>
          <Form.Input placeholder="Search todo here" />
        </Form>
      </div>
      <Ul>
        {todos.length ? (
          todos.map((todo) => (
            <Ul.Li key={todo.id}>
              {todo.title}
              <div className="item_btn">
                <Button type="button" className="edit" onClick={() => handleUpdate(todo.id)}>
                  Edit
                </Button>
                <Button type="button" className="delete" onClick={() => handleDelete(todo.id)}>
                  Delete
                </Button>
              </div>
            </Ul.Li>
          ))
        ) : (
          <p>Todo list is empty</p>
        )}

        {/* <Ul.Li>
          Item one
          <div className="item_btn">
            <Button
              type="button"
              className="edit"
              onClick={() => handleUpdate()}
            >
              Edit
            </Button>
            <Button
              type="button"
              className="delete"
              onClick={() => handleUpdate()}
            >
              Delete
            </Button>
          </div>
        </Ul.Li> */}
      </Ul>
    </>
  );
};

export default TodoList;
