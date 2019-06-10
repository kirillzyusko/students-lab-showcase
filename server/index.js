const express = require('express');

const app  = express();
const PORT = 3333;

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin',  '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, credentials');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/user', (req, res) => {
    res.json({
        id: 1,
        name: 'Kiryl',
        surname: 'Ziusko',
        createdAt: new Date(),
    });
});

app.listen(PORT, () => {
    console.log(`Api listens on port ${PORT}`);
});

module.exports = app;