const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

const session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing',
}));
app.use(function(req, res, next) {
    if (!req.session.shoppingCart) {
        req.session.shoppingCart = [];
    }
    next();
});

let products = [{
        id: 1,
        name: "Dell laptop",
        price: 1200,
        description: "i7 dell laptop in cheap price."
    }, {
        id: 2,
        name: "Lenovo laptop",
        price: 1000,
        description: "Lenovo yoga"
    },
    {
        id: 3,
        name: "Macbook Pro",
        price: 1300,
        description: "M1 chip macbook pro 2020."
    }
];


app.get('/', (req, res) => {
    res.render("shop", {
        products: products
    });
});

app.get("/product", (req, res) => {
    let selectedProduct = products.find(x => x.id == req.query.id);
    res.render("product", { product: selectedProduct });
});


app.post('/addToCart', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;

    let selectedProduct = req.session.shoppingCart.find(x => x.name == name);
    let newProd;

    if (selectedProduct != null || selectedProduct != undefined) {
        selectedProduct.quantity += 1;
    } else {
        newProd = {
            name: name,
            price: price,
            quantity: 1,

        }
        req.session.shoppingCart.push(newProd);
    }

    res.redirect('/cart');
});


app.get("/cart", (req, res) => {
    res.render("shoppingcart", { shoppingCart: req.session.shoppingCart });
});

app.listen(3000, () => console.log('localhost:3000'));