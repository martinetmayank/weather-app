const request = require('request')

const API = 'f6e2f08f428e4add899986d425d6872f'
const URL = 'https://api.darksky.net/forecast/f6e2f08f428e4add899986d425d6872f/37.8267,-122.4233?units=ca'


request({
    url: URL,
    json: true
}, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather service...')
    } else if (response.body.error) {
        console.log('Unable to find location...')
    } else {

        const temperature = response.body.currently.temperature
        const rainChance = response.body.currently.precipProbability
        const humidity = response.body.currently.humidity
        const visibility = response.body.currently.visibility
        const windSpeed = response.body.currently.windSpeed
        const summary = response.body.daily.data[0].summary

        console.log('Temperature ' + temperature + ' degree celsius.')
        console.log('There is ' + rainChance + '% chance of rain today.')
        console.log('Humidity: ' + humidity)
        console.log('Wind Speed is ' + windSpeed + ' mps')
        console.log('Visibility: ' + visibility)
        console.log('Summary: ' + summary)

    }
})


/*
Geocoding Services
I'm using MapBox API for this purpose.
Address -> Lat/Lon pair -> DarkSky API -> Result
*/

const MapBoxAPI = 'pk.eyJ1IjoibWFydGluZXRtYXlhbmsiLCJhIjoiY2tlMGJqOHQ2MXJtOTMwb3NkMGFvc254biJ9.r2mocrfZoiLzOWMA_7GpSw'
const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/gurgaon.json?access_token=pk.eyJ1IjoibWFydGluZXRtYXlhbmsiLCJhIjoiY2tlMGJqOHQ2MXJtOTMwb3NkMGFvc254biJ9.r2mocrfZoiLzOWMA_7GpSw&limit=1'

request({
    url: geoCodeURL,
    json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to geoCoding Service...')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location, try another search...')

    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})