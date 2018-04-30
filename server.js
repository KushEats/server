'use strict';


const express = require('express');
const cors = require('cors');
const pg = require('pg');
const superagent = require('superagent');
const bodyparser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const CLIENT_URL = process.env.CLIENT_URL;
const TOKEN = process.env.TOKEN;

'postgres://bfkzzjxkdsmntp:98fea21172b5715ed3961eb2f42018ecf0de4bd7535acfee7df13b8443cec364@ec2-107-21-103-146.compute-1.amazonaws.com:5432/d7oaju72tqtrpf'

const GOOGLE_API_KEY = 'AIzaSyA56qkwvFFLhqubk1AV7VPrTSh_DkoogtQ';
const API_KEY = process.env.GOOGLE_API_KEY;

//Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/v1/admin', (req, res) => res.send(TOKEN === parseInt(req.query.token)));


app.get('/api/v1/map/stores', (req, res) => res.send)






app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));