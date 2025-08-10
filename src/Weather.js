import React ,{useState}from 'react'
import axios from 'axios'

export default function  () {
    const [city ,setCity]= useState();
    const [weather, setWeather]= useState();
        const handleCityChange = (event)=>{
        setCity(event.target.value);
    }
    const fetchWeather = async() => {
        try {
          const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'83f847821855763fe0ac8accea39b631'}`)
        console.log(response);   
        setWeather(response);                                                    
        }
        catch(error){
            console.error(error);
       
        }
        } 
    const handleClick =()=>
        {
            fetchWeather() 
        }
  return (
    <div className='weather-container'>
    <input type='text' placeholder='enter city name' value={city}
     onChange={handleCityChange} />
        <button onClick={handleClick}>get weather</button>
        {weather && <>
<div>
<h1>Weather in {weather.data.name}</h1>
<h2>Temperature: {(weather.data.main.temp)/10}</h2>
<h3> wind speed  :{weather.data.wind.speed} m/s</h3>
<h1>pankaj is good </h1>
</div>
</>}
      </div>
  )
}
