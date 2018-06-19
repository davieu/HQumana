//main server file where we'll start our node server from
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
const bodyParser = require('body-parser');
require('./models/User')
require('./services/passport')
require('dotenv').config()

mongoose.connect(keys.mongo_URI)

const app = express()

app.use(bodyParser.json());

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

//process.env.PORT will be an environment variable
//if TRUTHY we're in production and we'll run off that port
//otherwise we're in development and will run port 5000
const PORT = process.env.PORT || 5000
app.listen(PORT)