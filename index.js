// npm i express pg
// npm install --save cors

const express = require('express');
const bodyParser = require('body-parser');
const db = require('../music-api/queries');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
});
app.get('/artist', db.getArtist)
app.get('/artist/:id', db.getArtistById)
app.post('/artist', db.createArtist)
app.put('/artist/:id', db.updateArtist)
app.delete('/artist/:id', db.deleteArtist)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

// API is fully functioning and was able
// to successfully use POST, PUT, DELETE
// to make changes using CURL!!