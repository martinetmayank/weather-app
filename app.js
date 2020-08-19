const request = require('request')
const geocode = require('./utils/geocode')
/*
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
*/

geocode('Gurgaon', (error, data) => {
    console.log(error, data)
})