const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const API = 'f6e2f08f428e4add899986d425d6872f'
    const URL = 'https://api.darksky.net/forecast/' + API + '/' + latitude+ ',' + longitude + '?units=ca'

    request({
        url: URL,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect ot weather service...', undefined)
        } else if (response.body.error) {
            callback('Unable to find location...', undefined)
        } else {
            callback(undefined, {
                temperature : response.body.currently.temperature,
                rainChance : response.body.currently.precipProbability,
                humidity : response.body.currently.humidity,
                visibility : response.body.currently.visibility,
                windSpeed : response.body.currently.windSpeed,
                summary : response.body.daily.data[0].summary,
            })
        }
    })
}

module.exports = forecast