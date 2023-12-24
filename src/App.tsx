import Todolist from "./Components/features/todo/Todolist";
import Layout from "./Layout/index";
// import TodoList from "./Components/features/todo/TodoList";

function App() {
  return (
    <div className="content">
      <Layout className="container">
      <Todolist />
      </Layout>
    </div>
  );
}

export default App;
