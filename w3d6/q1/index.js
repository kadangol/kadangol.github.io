const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.static(__dirname + '/css'));


app.get('/', (req, res) => {
    const date = new Date();
    let style = '';
    if (date.getHours() >= 6 && date.getHours() <= 18) {
        style = "/day.css";
    } else {
        style = "/night.css";
    }
    res.render("index", {
        time: date.toTimeString(),
        style: style
    });
});


app.listen(3000)