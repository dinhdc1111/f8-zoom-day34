const ButtonCounter = ({ handleClick, children }) => {
  return <button className="btn" onClick={handleClick}>{children}</button>;
};

const getClassByCount = (count) => {
  if (count > 0) return "positive";
  if (count < 0) return "negative";
  return "zero";
};

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => setCount((preState) => preState + 1);
  const handleDecrement = () => setCount((preState) => preState - 1);
  const handleReset = () => setCount(0);

  return (
    <>
      <section className="counter-app">
        <h1 className={`${getClassByCount(count)} result`}>{count}</h1>
        <div className="controls">
          <ButtonCounter handleClick={handleIncrement}>Tăng (+1)</ButtonCounter>
          <ButtonCounter handleClick={handleDecrement}>Giảm (-1)</ButtonCounter>
          <ButtonCounter handleClick={handleReset}>Reset (0)</ButtonCounter>
        </div>
      </section>
      <footer className="footer">
        <div className="btn-footer">
          <a href="/">Quay về trang chủ</a>
        </div>
      </footer>
    </>
  );
};

const domNode = document.querySelector("#root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
