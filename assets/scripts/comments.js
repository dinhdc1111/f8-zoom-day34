const App = () => {
  const [comments, setComments] = React.useState([]);

  const [inputName, setInputName] = React.useState("");
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputBody, setInputBody] = React.useState("");

  const handleInputName = (e) => setInputName(e.target.value);
  const handleInputEmail = (e) => setInputEmail(e.target.value);
  const handleInputBody = (e) => setInputBody(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payloadComment = {
      id: comments.length + 1,
      name: inputName,
      email: inputEmail,
      body: inputBody,
    };

    setComments((prev) => [payloadComment, ...prev]);
    setInputName("");
    setInputEmail("");
    setInputBody("");
  };

  React.useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
      const data = await response.json();
      setComments(data);
    };
    fetchComments();
  }, []);

  const getAvatarByName = (name) => `https://ui-avatars.com/api/?name=${name}&background=random`;

  return (
    <div className="comments-wrapper">
      <h1 className="comments-app-title">Comment System</h1>
      <section className="comments-card">
        <form className="form-add-comment" onSubmit={handleSubmit}>
          <input
            type="text"
            className="add-input"
            onChange={handleInputName}
            value={inputName}
            placeholder="Nhập tên người dùng"
            required
          />
          <input
            type="email"
            className="add-input"
            onChange={handleInputEmail}
            value={inputEmail}
            placeholder="Nhập email"
            required
          />
          <textarea
            className="add-input"
            onChange={handleInputBody}
            value={inputBody}
            placeholder="Nhập nội dung bình luận"
            required
            rows={4}
          ></textarea>
          <button className="btn btn-comment" type="submit">
            <i className="fa-solid fa-comments"></i> Bình luận
          </button>
        </form>
        <div className="comment-list">
          {comments.map((comment) => (
            <div className="comment-item" key={comment.id}>
              <div className="comment-item-info">
                <div className="comment-author-avatar">
                  <img src={getAvatarByName(comment.name)} alt={comment.name} width={50} height={50} />
                </div>
                <section className="comment-author-meta">
                  <div className="comment-author-info">
                    <div className="comment-author-name">{comment.name}</div>
                    <div className="comment-author-time">Vừa xong</div>
                  </div>
                  <span className="comment-author-email">{comment.email}</span>
                </section>
              </div>
              <p className="comment-item-content">{comment.body}</p>
            </div>
          ))}
        </div>
      </section>
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
