const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
const ejs= require("ejs");
const expressEjsLayouts = require("express-ejs-layouts");
const path = require("path")


app.get("/" , (req, res) => {
    res.render('index')
})


// set Templates
app.use(expressEjsLayouts);
app.set("views", path.join(__dirname + '/resources/views'))
app.set('view engine', 'ejs')


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})