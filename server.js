'use strict';

require('dotenv').config();
console.log(process.env.GOOGLE_API_KEY)
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const superagent = require('superagent');
const bodyparser = require('body-parser');
const yelp = require('yelp-fusion');


const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;
// const TOKEN = process.env.TOKEN;

const API_KEY = process.env.GOOGLE_API_KEY;
const yelpApiKey = process.env.YELP_API_KEY;

const yelpClient = yelp.client(yelpApiKey);

//Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/v1/admin', (req, res)

//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyDLlLO9AmKusj7eGw_rT8e2t7MYLROTG_I


// app.get('/api/v1/admin', (req, res) => res.send(TOKEN === parseInt(req.query.token)));

app.get('/api/v1/get_stores', (req, res) => {
  const searchRequestWeed = {
    term: 'weed stores',
    location: 'seattle, wa'
  };

  yelpClient.search(searchRequestWeed)
    .then(response => {
      const firstResult = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(firstResult, null, 4);
      return prettyJson;
    })
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(e => {
      console.log(e);
    });
});

app.get('/api/v1/get_fast_food', (req, res) => {
  const searchRequestFood = {
    term: 'fast food',
    location: 'seattle, wa'
  };

  yelpClient.search(searchRequestFood)
    .then(response => {
      const secondResult = response.jsonBody.businesses;
      const prettyprettyJson = JSON.stringify(secondResult, null, 4);
      return prettyprettyJson;
    })
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(e => {
      console.log(e);
    });
});

app.get('*', (req, res) => res.redirect(CLIENT_URL));


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));