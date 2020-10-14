const request = require('request')

const getGeocode = (address, callback)=>{
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent( address)+'.json?access_token=pk.eyJ1Ijoic3RldmVueWVhaDIwMDkiLCJhIjoiY2tnOHR5NHE4MGtsZzJ4cG05ZWw0MGtwNyJ9.aYIU6RIGEGTQv-y6ISemUA'
    request({url:geoUrl, json:true}, (error, response, body)=> {
        if (error) callback('Unable to connect to geocoding service', undefined);
        else if(body.error) callback('unable to find location', undefined)
        else {
            const data ={
                lat:body.features[0].center[1],
                lon:body.features[0].center[0],
                location: body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = getGeocode