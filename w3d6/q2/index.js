const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));


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
    res.render("result", { msg: msg });
});


app.get('/', (req, res) => {
    res.render("index", {});
});

app.listen(3000, () => console.log('localhost:3000'));