const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = process.env.PORT
if (port == null || port == "") {
  port = 3000;
}

app.use(cors());

app.use(express.json())

app.use('/api', require('./api'))

app.listen(port);

const syncDb = () => db.sync()

async function bootApp() {
  await syncDb()
}

bootApp();
