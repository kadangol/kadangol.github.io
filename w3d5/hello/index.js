const express = require('express');
const app = express();

let arr = [];

app.get('/', (req, res) => {
    let html = "<ul>";
    for (e of arr) {
        html += "<li>" + e + "</li>";
    }
    html += "</ul>";
    html += "<a href='/add'>add</a>";
    res.send(html);
});



app.get('/add', (req, res) => {
    let html = "<form action='add' method='post'>";
    html += "<label>Field <input type='text' name='item' /></label>";
    html += "<input type='submit' value='Submit'/>";
    html += "</form>";
    res.send(html);
});

app.post('/add', (req, res) => {
    console.log(req.body.item);

    let item = req.body.item;

    arr.push(item);

    res.redirect("/");

});


app.listen(3000, () => console.log(`localhost:3000`));