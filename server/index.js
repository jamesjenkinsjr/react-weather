//imports
const express = require('express');
const axios = require('axios');

//configuration
require('dotenv').config();
const{ API_KEY } = process.env;

//creation of stuff
const serverApp = express();
const port = process.env.PORT || 5000;

serverApp.get('/forecast/:lat,:long', function(request, response){
    const { lat, long } = request.params;
    const url = `https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`;
    axios
        .get(url)
        .then(res => {
            response.status(200).json(res.data);
        })
        .catch(err => {
            response.status(500).json({
                msg: 'Yo junk is bunked'
            });
        });
});

serverApp.listen(port, () => {
    console.log(`Now listen here ${port}`);
})