const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (address) {
    geoCode(address, (error, { lat, long }) => {
        if (error) { return console.log(error) }
            forecast(lat, long, (error, forecastData) => {
                if (error) { return console.log(error) };
                    console.log(forecastData);
                    console.log(address.toString());
            });
    });
}else{
    console.log('Please provide input');
}




