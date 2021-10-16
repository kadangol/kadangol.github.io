const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');
app.use('/css', express.static(path.join(__dirname, '/css')));

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

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

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

app.listen(3000, () => console.log(`localhost:3000`));