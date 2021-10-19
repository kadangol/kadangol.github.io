const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

const path = require('path');
app.set('views', path.join(__dirname, "view"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.render('addCookie', {
        cookies: req.cookies
    })
});

app.post('/addCookie', (req, res) => {
    res.cookie(req.body.key, req.body.value);
    res.redirect('/');
});

app.listen(3000, () => console.log('localhost:3000'));