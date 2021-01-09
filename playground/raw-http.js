const https = require('https');
const weatherURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/kitchener.json?access_token=pk.eyJ1IjoianNhcmRpbmkiLCJhIjoiY2tqaGFrd2xvMTJ1dDJxbXNneDZwbWF0NyJ9.G2TGjU949qirgHZiNlzgUQ';

const req = https.request(weatherURL, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
    })
});


req.on('error', (e) => {
    console.error(e);
});

req.end();