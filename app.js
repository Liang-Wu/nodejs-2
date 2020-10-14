const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const address = process.argv[2]
if(address) {
    geocode(address, (error, {lat, lon, location}) => {
        if (error) return console.log(error)
        forecast(lat, lon, (error, forecastData) => {
            if (error) return console.log(error)
            console.log(location)
            console.log(forecastData)
        })
    })
}
else console.log('please enter an address')

/*const weatherHandler=(data)=> {
    const options = {
        method: 'GET',
        url: 'https://api.climacell.co/v3/weather/realtime',
        json: true,
        qs: {
            lat: data.lat,
            lon: data.lon,
            unit_system: 'si',
            fields: 'temp,feels_like,dewpoint,humidity,wind_speed,wind_direction,baro_pressure,precipitation,precipitation_type',
            apikey: 'RM3rpJSCL60HY9WG9vWZvR0LpoUg0E9E'
        }
    }
    request(options, (error, response, body) => {
        if (error) console.log('Unable to connect to weather service');
        else if (body.error) console.log('unable to find location')
        else {
            const message = 'Temperature: ' + body.temp.value + ' ' + body.temp.units + ' and feels like ' + body.feels_like.value + ' ' + body.feels_like.units
            console.log(message);
        }
    })
}*/

/* const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3RldmVueWVhaDIwMDkiLCJhIjoiY2tnOHR5NHE4MGtsZzJ4cG05ZWw0MGtwNyJ9.aYIU6RIGEGTQv-y6ISemUA'
request({url:geoUrl, json:true}, (error, response, body)=> {
    if (error) console.log('Unable to connect to geocoding service');
    else if(body.error) console.log('unable to find location')
    else {
        const latitude = body.features[0].center[1]
        const longtitude = body.features[0].center[0]
        console.log(latitude)
        console.log(longtitude)
    }
})*/


