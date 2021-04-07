const express = require('express');
const cors = require('cors');
const { HashRouter } = require('react-router-dom');
const app = express();

app.use(cors());

app.get('/home', function(req, res) {
    const home = [
        {
            id: 1,
            name: 'hat',
            description: 'Something on your head'
        },
        {
            id: 2,
            name: 'jacket',
            description: 'Something on your shoulders'
        },
        {
            id: 3,
            name: 'shoes',
            description: 'Something on your feet'
        }
    ]
    res.send(home);
})

app.get('/about', function(req, res) {
    const about = [
        {
            id: 1,
            name: 'Lelia'
        },
        {
            id: 2,
            name: 'Yoel'
        },
        {
            id: 3,
            name: 'Justin'
        }
    ]
    res.send(about);
})

app.listen('3001', function () {
    console.log('Listening on port 3001');
})