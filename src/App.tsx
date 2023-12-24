import Layout from './layout/index';
import TodoList from './features/todo/TodoList';

function App() {
  return (
    <div className="content">
      <Layout className="container">
        <TodoList />
      </Layout>
    </div>
  );
}

export default App;
