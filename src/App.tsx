import Layout from "./Layout/index";
import TodoList from "./components/features/todo/TodoList";




function App() {
  return (

      <div className="content">
        
      <Layout >
        <TodoList />
        {/* <TodoList /> */}
          
          {/* <div className="add_todo_input">
              <form action="">
                  <input type="text" placeholder="Add Todo" />
                  <button type="submit">Add Todo</button>
              </form>
          </div> */}
          {/* <div className="search_todo_input">
              <form >
                  <input type="text" placeholder="Search Todo" />
                </form>
              
          </div> */}
          {/* <div>
              <ul>
                  <li>Item One  <div className="item_btn"><button className="edit">Edit</button><button className="delete">Delete</button></div></li>
                  <li>Item One  <div className="item_btn"><button>Edit</button><button>Delete</button></div></li>
                  <li>Item One  <div className="item_btn"><button>Edit</button><button>Delete</button></div></li>
                  <li>Item One  <div className="item_btn"><button>Edit</button><button>Delete</button></div></li>
                  <li>Item One  <div className="item_btn"><button>Edit</button><button>Delete</button></div></li>
              </ul>
          </div> */}

          </Layout>
    </div>
  );
}

export default App;
