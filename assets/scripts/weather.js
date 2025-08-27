const App = () => {
  return (
    <div className="-wrapper">
      <h1 className="-app-title">Todo List App</h1>
      <section className="-card"></section>
      <footer className="footer">
        <div className="btn-footer">
          <a href="index.html">
            <i className="fa-solid fa-backward"></i> Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
