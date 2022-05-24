require('dotenv').config();

const express = require('express');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

const httpServer = http.createServer(app);

module.exports = { httpServer };