const request = require('request')

const API = 'f6e2f08f428e4add899986d425d6872f'
const URL = 'https://api.darksky.net/forecast/f6e2f08f428e4add899986d425d6872f/37.8267,-122.4233'

request({
    url: URL
}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})