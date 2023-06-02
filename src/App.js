import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=44428a240ded2e0b1c7745b64f66a1bb`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data)
      })
    }
  }

  return (
    <div className='app'>
      <div className='search'>
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter location'
          type='text' />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className='desc'>
            <p>{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
          </div>
        </div>
        {data.name != undefined &&
          <div className='bottom'>
            <div className='feels'>
              <p className='bold'>
                {data.main ? <h2>{data.main.feels_like.toFixed()}°F</h2> : null}
              </p>
              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              <p className='bold'>
                {data.main ? <h2>{data.main.humidity.toFixed()}°F</h2> : null}
              </p>
              <p>Humidity</p>
            </div>
            <div className='wind'>
              <p className='bold'>
                {data.main ? <h2>{data.wind.speed}MPH</h2> : null}
              </p>
              <p>Wind Speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
