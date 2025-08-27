const ButtonCounter = ({ handleClick, children, className }) => {
  return (
    <button className={`${className} btn`} onClick={handleClick}>
      {children}
    </button>
  );
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
        <h1 className="counter-app-title">Counter App</h1>
        <div className={`${getClassByCount(count)} result`}>{count}</div>
        <div className="controls">
          <ButtonCounter className="btn-positive" handleClick={handleIncrement}>
            <i class="fa-solid fa-plus"></i> Increase
          </ButtonCounter>
          <ButtonCounter className="btn-negative" handleClick={handleDecrement}>
            <i class="fa-solid fa-minus"></i> Decrease
          </ButtonCounter>
          <ButtonCounter handleClick={handleReset}><i class="fa-solid fa-rotate"></i> Reset</ButtonCounter>
        </div>
      </section>
      <footer className="footer">
        <div className="btn-footer">
          <a href="/"><i className="fa-solid fa-house"></i> Back to Home</a>
        </div>
      </footer>
    </>
  );
};

const domNode = document.querySelector("#root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
