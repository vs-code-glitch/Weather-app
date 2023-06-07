import React, { useState } from "react";
import  axios  from "axios";
function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('New Delhi');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=9795591dedeba0822a2cf780b733df2a`;

  const searchLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('');
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
          onKeyDown={searchLocation}
          type="text"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}*F</h1> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom bold">
          <div className="feels">
            {/* <p className="bold">{data.main.feels_like.toString()}</p> */}
            {data.main ? (
              <p className="bold">{data.main.feels_like}*F</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.main ? <p className="bold">{data.wind.speed} Mph</p> : null}
            <p>Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
