const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    let msg = "Welcome ";
    if (!name) {
        name = "person ";
    }
    msg += name;

    if (age) {
        msg += ` Age: ${age}`;
    }
    res.send(msg);


});
app.listen(3000, () => console.log(`localhost:3000`));