let uniqId = 0;

const TodoItem = ({ todo, handleRemove, handleChecked }) => {
  return (
    <div className={`todo-item ${todo.completed && "task-item-done"}`}>
      <input type="checkbox" value={todo.completed} onChange={() => handleChecked(todo.id)} />
      <div className="todo-item-content">{todo.text}</div>
      <div className="btn-delete" title="Remove" onClick={() => handleRemove(todo.id)}>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { id: ++uniqId, text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleRemove = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const handleChecked = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // Thống kê task
  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="todo-wrapper">
      <h1 className="todo-app-title">Todo List App</h1>
      <form className="form-add-task" onSubmit={handleSubmit}>
        <input
          type="text"
          className="add-task-input"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Nhập task mới..."
          required
        />
        <button className="btn btn-add-task" type="submit">
          <i className="fa-solid fa-plus"></i> Thêm mới
        </button>
      </form>
      <section className="todo-card">
        <div className="todo-statistics">
          <div className="completed-tasks">Hoàn thành: {completedTasks} task(s)</div>
          <div className="remaining-tasks">Còn lại: {remainingTasks} task(s)</div>
          <div className="total-tasks">Tổng: {totalTasks} task(s)</div>
        </div>
        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="todo-item empty-task">😆 Chưa có task nào. Hãy thêm task đầu tiên nào! </div>
          ) : (
            todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} handleRemove={handleRemove} handleChecked={handleChecked} />
            ))
          )}
        </div>
      </section>
      <footer className="footer">
        <div className="btn-footer">
          <a href="index.html">
            <i className="fa-solid fa-arrow-left"></i> Quay lại
          </a>
        </div>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
