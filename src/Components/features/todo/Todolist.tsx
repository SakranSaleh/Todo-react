import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Form from "../ui/form";
import Ul from "../ui/ul";
import Buttons from "../buttons";
import { useDebounce } from "~/hooks/useDebounce";

interface Todo {
  id: number;
  title: string;
}

// const todo_list: Todo[] = [
//   // { id: 1, title: "Item One" },
//   // { id: 2, title: "Item Two" },
// ];

const Todolist = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [updateTodoList, setUpdateTodoList] = useState<Todo | null>(null);
  const [searchTodo, setSearchTodo] = useState<string>('');
  const [searchTodos, setSearchTodos] = useState<Todo[]>([]);
  const debounsedTodo = useDebounce(searchTodo, 1000);


  useEffect(()=>{
    let locTodos = localStorage.setItem("todos", JSON.stringify(todos) );
    // console.log(JSON.parse(localStorage.getItem("todos")));
    
  },[todos])

  useEffect(()=>{
    console.log({debounsedTodo});
    if(debounsedTodo){
      const newTodo = todos.filter((todoItem)=> todoItem.title.toLowerCase().includes(debounsedTodo.toLowerCase()))
   
        console.log({newTodo})
      setSearchTodos(newTodo);

    }else{
      setSearchTodos([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[debounsedTodo]);

  

  const InputFildOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (value: Todo) => {
    setTodo(value.title);
    setUpdateTodoList(value);
  };

  const FormOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) return;

    if (updateTodoList) {
      const newTodo = todos.map((todo_item) => {
        if (todo_item.id === updateTodoList.id) {
          return {
            ...todo_item,
            title: todo,
          };
          
        }
        return todo_item;
      });

      setTodos([...newTodo]);
      setTodo("");
      setUpdateTodoList(null);
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todo,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  // const SearchFormSubmit = ()=>{
    
  // }

  const searchOnChange = (e : ChangeEvent<HTMLInputElement>)=>{
      setSearchTodo(e.target.value);
      // console.log("searchTodo", searchTodo);
  }

  return (
    <>
      <Form onSubmit={FormOnSubmit} className="add_todo_input">
        <Form.Input
          placeholder="Add a todo"
          value={todo}
          onChange={InputFildOnChange}
        />

        <Form.Button type="submit">{updateTodoList ? 'Updated todo' : 'Add todo'}</Form.Button>
      </Form>

      <Form className="search_todo_input">
        <Form.Input placeholder="Search Todo" value={searchTodo} onChange={searchOnChange} />
      </Form>

      <Ul>
        { searchTodos.length ? searchTodos.map((item) => {
            return (
              <Ul.Li key={item.id}>
                {item.title}
                <div className="item_btn">
                  <Buttons className="edit" onClick={() => handleEdit(item)}>
                    Edit
                  </Buttons>
                  <Buttons
                    className="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Buttons>
                </div>
              </Ul.Li>
            );
          }) :  todos.length ? (
          todos.map((item) => {
            return (
              <Ul.Li key={item.id}>
                {item.title}
                <div className="item_btn">
                  <Buttons className="edit" onClick={() => handleEdit(item)}>
                    Edit
                  </Buttons>
                  <Buttons
                    className="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Buttons>
                </div>
              </Ul.Li>
            );
          })
        ) : (
          <div>Todo list is empty</div>
        )}
        {/* <Ul.Li>
          Hello
          <div className="item_btn">
            <Buttons
              className="edit"
              onClick={() => {
                console.log("Button Edit");
              }}
            >
              Edit
            </Buttons>
            <Buttons
              className="delete"
              onClick={() => {
                console.log("Button Delete");
              }}
            >
              Delete
            </Buttons>
          </div>
        </Ul.Li> */}
      </Ul>
    </>
  );
};

export default Todolist;
