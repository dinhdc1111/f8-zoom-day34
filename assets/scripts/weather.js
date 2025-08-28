const weatherData = {
  hanoi: {
    city: "Hà Nội",
    temp: 28,
    weather: "Nắng",
    humidity: 65,
    icon: "https://res.cloudinary.com/do9rcgv5s/image/upload/v1756369476/ol4plmd1j9g2aydgilqh.png",
  },
  hcm: {
    city: "TP.HCM",
    temp: 32,
    weather: "Có mây",
    humidity: 78,
    icon: "https://res.cloudinary.com/do9rcgv5s/image/upload/v1756369476/gbcnob1zcls0oyduqjj5.png",
  },
  danang: {
    city: "Đà Nẵng",
    temp: 30,
    weather: "Mưa nhẹ",
    humidity: 82,
    icon: "https://res.cloudinary.com/do9rcgv5s/image/upload/v1756369476/t8tsa6xa02kdyzcewggj.png",
  },
};

const App = () => {
  const [data, setData] = React.useState(weatherData);
  const [selectedCity, setSelectedCity] = React.useState("");

  const handleCityChange = (e) => setSelectedCity(e.target.value);

  const handleRefresh = () => {
    if (!selectedCity) return;
    setData((prev) => {
      const updated = { ...prev };
      const city = updated[selectedCity];
      city.temp += Math.floor(Math.random() * 11) - 5;
      city.humidity += Math.floor(Math.random() * 11) - 5;
      return { ...updated };
    });
  };

  const cityData = data[selectedCity];

  return (
    <div className="weather-wrapper">
      <h1 className="weather-app-title">Weather App</h1>

      <div className="form-select-city">
        <select name="city" value={selectedCity} className="form-select" onChange={handleCityChange}>
          <option value="">Lựa chọn thành phố</option>
          <option value="hanoi">Hà Nội</option>
          <option value="hcm">Hồ Chí Minh</option>
          <option value="danang">Đà Nẵng</option>
        </select>
        <button className="btn btn-reset" onClick={handleRefresh}>
          Làm mới
        </button>
      </div>

      <section className="weather-card">
        {cityData ? (
          <div className="weather-info">
            <h3 className="city-name">{cityData.city}</h3>
            <div>
              <img src={cityData.icon} alt="Weather Icon" width={150} height={150} />
            </div>
            <div className="temperature">{cityData.temp}°C</div>
            <div className="weather-details">
              <div className="temp-item">
                <p className="temp-icon">🌡️</p>
                <div className="temp-content">
                  {cityData.temp - 1}°C - {cityData.temp + 1}°C
                </div>
              </div>
              <div className="temp-item">
                <img src={cityData.icon} alt="Weather Icon" width={20} height={20} />
                <div className="temp-content">{cityData.weather}</div>
              </div>
              <div className="temp-item">
                <p className="temp-icon">💧</p>
                <div className="temp-content">{cityData.humidity}%</div>
              </div>
            </div>
          </div>
        ) : (
          <p>Vui lòng chọn thành phố để xem thông tin.</p>
        )}
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
