import './WeatherForecast.css'

const WeatherForecast = ( props ) => {

    return (
        <div className="weather">
            <h2>Day of the Week: {props.weatherData.day}</h2>
            <img src={props.weatherData.img} alt={props.weatherData.imgAlt} />
            <p><span>conditions: {props.weatherData.conditions} </span>current weather conditions</p>
            <p><span>time: {props.weatherData.time} </span>time of day</p>
        </div>
    )
}

export default WeatherForecast