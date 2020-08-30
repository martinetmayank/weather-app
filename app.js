const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (address) {
    /**
     * geocode takes two arguments, 'address' and 'callback'
     * callback has 'error' and 'data'
     * if data, we get three output: latitude, longitude, location
     */
    geocode(address, (error, {
        latitude,
        longitude,
        location
    }) => {

        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log('Location: ' + location)
            console.log(forecastData)
        })

    })
} else {
    console.log('Please provide an address...')
}