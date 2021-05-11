const express = require('express');

const app = express();
const request = require('request');
const cors = require('cors')

app.set('port', 3000);

app.use(express.json())

app.use(cors())

app.post('/getdata', function(req, res) {
    const dataContainer = req.body
    const url = dataContainer.url
    request(url, function (err, response, body) {
        if (!err && response.statusCode < 400) {
            console.log(body);
            res.send(body);
        }
    })
})

app.use(function(req, res) {
    res.type('text/plain')
    res.status(404);
    res.send('404 - Not Found')
})

app.use(function(err, req, res, next) {
    console.log(err.stack)
    res.type('plain/text')
    res.status(500)
    res.send('500 - server error')
})

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + ';')
})