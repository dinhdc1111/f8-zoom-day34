const h1 = <h1>Hello</h1>;

const domNode = document.querySelector("#root");
const root = ReactDOM.createRoot(domNode);
root.render(h1);
