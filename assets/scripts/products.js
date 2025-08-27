const Modal = ({ isOpen, onClose, data }) => {
  return (
    <>
      {isOpen && (
        <section className="popup-overlay">
          <div className="popup-content">
            <div className="products-card-id">ID: {data.id}</div>
            <div className="products-card-user">User ID: {data.userId}</div>
            <h2 className="products-card-title">{data.title}</h2>
            <p className="products-card-body">{data.body}</p>
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:format(webp):quality(75)/vsp_g2530s3_1_f6f271575e.png"
              alt={data.title}
              className="product-card-img"
              width="100%"
            />
            <button className="btn btn-close" onClick={onClose}>
              Đóng
            </button>
          </div>
        </section>
      )}
    </>
  );
};

const Skeleton = ({ width, height = 16 }) => {
  return <div className="skeleton" style={{ width, height }}></div>;
};

const SkeletonList = () => {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <div className="products-card skeleton-item" key={index}>
          <Skeleton width="100%" />
          <Skeleton width="100%" />
          <Skeleton width="100%" />
          <Skeleton width="100%" height="100%"/>
        </div>
      ))}
    </>
  );
};

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const truncateBody = (text, maxLength = 100) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const handleDetailClick = (id) => {
    setIsOpen(true);
    const product = products.find((product) => product.id === id);
    setProduct(product);
  };

  return (
    <>
      <div className="products-wrapper">
        <h1 className="products-app-title">Product List</h1>
        <section className="products-list">
          {products.length === 0 ? (
            <SkeletonList />
          ) : (
            products.map((product) => (
              <section className="products-card" key={product.id}>
                <div className="products-card-id">ID: {product.id}</div>
                <h2 className="products-card-title">{product.title}</h2>
                <p className="products-card-body">{truncateBody(product.body, 100)}</p>
                <img
                  src="https://cdn2.fptshop.com.vn/unsafe/384x0/filters:format(webp):quality(75)/vsp_g2530s3_1_f6f271575e.png"
                  alt={product.title}
                  className="product-card-img"
                  width="100%"
                />
                <button className="btn btn-detail" onClick={() => handleDetailClick(product.id)}>
                  Xem chi tiết
                </button>
              </section>
            ))
          )}
        </section>
        <footer className="footer">
          <div className="btn-footer">
            <a href="index.html">
              <i className="fa-solid fa-backward"></i> Back to Home
            </a>
          </div>
        </footer>
      </div>
      {isOpen && <Modal data={product} isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
