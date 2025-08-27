const ButtonCounter = ({ handleClick, children, className }) => {
  return (
    <button className={`${className} btn`} onClick={handleClick}>
      {children}
    </button>
  );
};

const getInfoCounter = (count) => {
  if (count > 0) return { classNameByCount: "positive", labelName: "Dương" };
  if (count < 0) return { classNameByCount: "negative", labelName: "Âm" };
  return { classNameByCount: "zero", labelName: "Bằng không" };
};

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => setCount((preState) => preState + 1);
  const handleDecrement = () => setCount((preState) => preState - 1);
  const handleReset = () => setCount(0);

  const { classNameByCount, labelName } = getInfoCounter(count);

  return (
    <>
      <section className="counter-app">
        <h1 className="counter-app-title">Counter App</h1>
        <div className={`${classNameByCount} result`}>{count}</div>
        <div className={`${classNameByCount} counter-app-label`}>{labelName}</div>
        <div className="controls">
          <ButtonCounter className="btn-negative" handleClick={handleDecrement}>
            <i className="fa-solid fa-minus"></i> Decrease
          </ButtonCounter>
          <ButtonCounter handleClick={handleReset}>
            <i className="fa-solid fa-rotate"></i> Reset
          </ButtonCounter>
          <ButtonCounter className="btn-positive" handleClick={handleIncrement}>
            <i className="fa-solid fa-plus"></i> Increase
          </ButtonCounter>
        </div>
      </section>
      <footer className="footer">
        <div className="btn-footer">
          <a href="../../index.html">
            <i class="fa-solid fa-backward"></i> Back to Home
          </a>
        </div>
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
