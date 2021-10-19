const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');
app.use('/css', express.static(path.join(__dirname, '/css')));

const session = require('express-session');

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing',
}));

app.use(function(req, res, next) {
    if (!req.session.name) {
        req.session.name = {}; // put name object into session
    }
    if (!req.session.age) {
        req.session.age = {}; // put age object into session
    }

    next();
});


const dt = new Date();
let style = "";
if (dt.getHours() >= 6 && dt.getHours() <= 18) {
    style = "<link href='./css/day.css' rel='stylesheet'/>";
} else {
    style = "<link href='./css/night.css' rel='stylesheet' type='text/css'/>";
}

app.get('/', (req, res) => {
    let html = "<!DOCTYPE html>" +
        "<html lang='en'>" +
        "<head>" +
        "<meta charset='UTF-8'>" +
        "<title>Q3</title>" +
        style +
        "</head>" +
        "<body>" +
        "<form method='post' action='/result'>" +
        "<label>Name<input type='text' name='name'/></label>" +
        "<label>Age<input type='number' name='age'/></label>" +
        "<input type='submit' value='Submit Query'/>" +
        "</form>" +
        "</body>" +
        "</html>";
    res.send(html);
});

app.get('/output', (req, res) => {
    let name = req.session.name;
    let age = req.session.age;

    let msg = 'Welcome ';
    if (!name) {
        name = "person";
    }
    msg += name;

    if (age) {
        msg += `. Age: ${age}`;
    }

    let html = "<!DOCTYPE html>" +
        "<html lang='en'>" +
        "<head>" +
        "<meta charset='UTF-8'>" +
        "<title>Q3</title>" +
        style +
        "</head>" +
        "<body>" +
        msg +
        "</body>" +
        "</html>";
    res.send(html);
});

app.post('/result', (req, res) => {
    req.session.name = req.body.name;
    req.session.age = req.body.age;
    res.redirect('/output');
});

app.listen(3000, () => console.log(`localhost:3000`));