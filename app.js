const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (address) {
    geocode(address, (error, locationData) => {

        if (error) {
            return console.log(error)
        }

        forecast(locationData.latitude, locationData.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log('Location: ' + locationData.location)
            console.log(forecastData)
        })

    })
} else {
    console.log('Please provide an address...')
}