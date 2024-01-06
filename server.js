require('dotenv').config()

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
const ejs = require("ejs");
const expressEjsLayouts = require("express-ejs-layouts");
const path = require("path")
const mongoose = require("mongoose")
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo');
// db connection


// DB connection
mongoose.connect(process.env.MONGO_URI);
const dbConnection = mongoose.connection;

dbConnection.once('open', () => {
    console.log('MongoDB connection is successfull!');
});

dbConnection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

// Session store
let mongoStore =  MongoDbStore.create({
    mongoUrl : process.env.MONGO_URI,
    mongooseConnection: dbConnection,
    collection: 'sessions'
})

//Session
app.use(session({
    secret : process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour

}))


app.use(flash())
app.use(express.json())


// set Templates
app.use(expressEjsLayouts);
app.use(express.static('public'))
app.set("views", path.join(__dirname + '/resources/views'))
app.set('view engine', 'ejs')

require("./routes/web")(app);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})