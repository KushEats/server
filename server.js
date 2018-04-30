'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const superagent = require('superagent');
const bodyparser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;
// const TOKEN = process.env.TOKEN;



const API_KEY = process.env.GOOGLE_API_KEY;

//Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/v1/admin', (req, res) => res.send(TOKEN === parseInt(req.query.token)));


// app.get('/api/v1/map/stores', (req, res) => res.send);

app.get('*', (req, res) => res.redirect(CLIENT_URL));




app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));