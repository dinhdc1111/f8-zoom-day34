const App = () => {
  return (
    <section className="main-wrapper">
      <h1 className="main-title">Bài tập ReactJS - F8</h1>
      <section className="parent-item">
        <h2 className="parent-title">
          <i className="fa-regular fa-folder-open"></i>{" "}
          <span className="parent-title-text">Bài tập buổi 1 - React.createElement, JSX, Props, State</span>
        </h2>
        <div className="child-list">
          <div className="child-item">
            <a href="../counter.html">
              <i className="fa-regular fa-file"></i> Bài tập 1 - Counter App
            </a>
          </div>
          <div className="child-item">
            <a href="../todo.html">
              <i className="fa-regular fa-file"></i> Bài tập 2 - Todo List App
            </a>
          </div>
          <div className="child-item">
            <a href="../profile.html">
              <i className="fa-regular fa-file"></i> Bài tập 3 - Profile Card
            </a>
          </div>
          <div className="child-item">
            <a href="../products.html">
              <i className="fa-regular fa-file"></i> Bài tập 4 - Product List
            </a>
          </div>
          <div className="child-item">
            <a href="../comments.html">
              <i className="fa-regular fa-file"></i> Bài tập 5 - Comment System
            </a>
          </div>
          <div className="child-item">
            <a href="../weather.html">
              <i className="fa-regular fa-file"></i> Bài tập 6 - Weather App
            </a>
          </div>
        </div>
      </section>
      <section>
        <h2 className="parent-title">
          <i className="fa-regular fa-folder-open"></i>{" "}
          <span className="parent-title-text">Bài tập buổi 2 - Đang cập nhật...</span>
        </h2>
      </section>
      <section>
        <h2 className="parent-title">
          <i className="fa-regular fa-folder-open"></i>{" "}
          <span className="parent-title-text">Bài tập buổi 3 - Đang cập nhật...</span>
        </h2>
      </section>
    </section>
  );
};

const domNode = document.querySelector("#root");
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
