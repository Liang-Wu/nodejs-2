const request = require('request');

const options = {
    method: 'GET',
    url: 'https://api.climacell.co/v3/weather/realtime',
    qs: {
        lat: '59',
        lon: '100',
        unit_system: 'si',
        fields: 'temp,feels_like,dewpoint,humidity,wind_speed,wind_direction,baro_pressure,precipitation,precipitation_type',
        apikey: 'RM3rpJSCL60HY9WG9vWZvR0LpoUg0E9E'
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});