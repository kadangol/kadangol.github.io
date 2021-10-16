const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    let msg = 'Welcome ';
    if (!name) {
        name = "person";
    }
    msg += name;

    if (age) {
        msg += ` Age: ${age}`;
    }
    res.send(msg);
});


app.get('/', (req, res) => {
    res.send("<form method='post' action='/result'>" +
        "<label>Name<input type='text' name='name'/></label>" +
        "<label>Age<input type='number' name='age'/></label>" +
        "<input type='submit' value='Submit Query'/>" +
        "</form>");
});

app.listen(3000, () => console.log('localhost:3000'));