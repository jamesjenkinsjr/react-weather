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
    const url = `https://api.darksky.net/forecast/${API_KEY}/37.8267,-122.4233`;
    axios
        .get(url)
        .then(res => {
            response.json(res.data);
        })
        .catch(err => {
            response.json({
                msg: 'You junk is bunked'
            });
        });
});

serverApp.listen(port, () => {
    console.log(`Now listen here ${port}`);
})