const Skeleton = ({ width, height = 16 }) => {
  return <div className="skeleton" style={{ width, height }}></div>;
};

const App = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        // Test delay network 2s
        setTimeout(() => {
          setUser(json);
          setLoading(false);
        }, 2000);
      });
  }, []);

  return (
    <div className="profile-wrapper">
      <h1 className="profile-app-title">Profile Card</h1>
      <section className="profile-card">
        <section className="profile-card-top">
          <div className="avatar">
            {loading ? (
              <div className="avatar-placeholder"></div>
            ) : (
              <img
                src="https://yt3.googleusercontent.com/Pa8wyxqTOkhu5DW_RvkiQIS7Bsa7OW7gSen-2WpaQsC2EqUAkgubAg1_QPc951pzpN2F2Q4_TA=s900-c-k-c0x00ffffff-no-rj"
                alt={user.name || 'Avatar'}
                width={150}
                height={150}
              />
            )}
          </div>
        </section>
        <section className="profile-card-bottom">
          <div className="info-name">{loading ? <Skeleton width="200px" height="26px" /> : `${user.name} (${user.username})`}</div>
          <div className="info-user-list">
            <div className="info-user-item">
              {loading ? (
                <Skeleton width="100%" />
              ) : (
                <>
                  <i className="fa-solid fa-envelope"></i>
                  <span>{user.email}</span>
                </>
              )}
            </div>
            <div className="info-user-item">
              {loading ? (
                <Skeleton width="100%" />
              ) : (
                <>
                  <i className="fa-solid fa-phone"></i>
                  <span>{user.phone}</span>
                </>
              )}
            </div>
            <div className="info-user-item">
              {loading ? (
                <Skeleton width="100%" />
              ) : (
                <>
                  <i className="fa-solid fa-globe"></i>
                  <span>{user.website}</span>
                </>
              )}
            </div>
            <div className="info-user-item">
              {loading ? (
                <Skeleton width="100%" />
              ) : (
                <>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{user?.address?.street} - {user?.address?.city}</span>
                </>
              )}
            </div>
          </div>
        </section>
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
