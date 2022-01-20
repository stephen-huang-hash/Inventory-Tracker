const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json())

app.use('/api', require('./api'))

app.listen(PORT, () =>
  console.log('Example app listening on port 3000!'),
);

const syncDb = () => db.sync()

async function bootApp() {
  await syncDb()
}

bootApp();
