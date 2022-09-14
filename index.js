const express = require("express");
const server = express();
server.use(express.json())
const db = require("./modules/db.js")('./database/live_fanatic.db')
const port = 3333
const host = `http://localhost:${port}`

// sessions
let cookieParser = require('cookie-parser')
server.use(cookieParser())
let session = require('express-session')
server.use( session( {
  secret: 'keyboard cat jksfj<khsdka',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // set to true with https
    httpOnly: true
  }
}))

// bypass 2FA verification (dev only)
server.use(function(req,res,next){req.bypassVerification = true; next()})

// ACL
const acl = require('./services/acl.js')
// server.use(acl)

// start
server.listen(port,() => {
  console.log(host)
  console.log('server running on port ' + port)
})

// front end directories
server.use('/', express.static('frontend/dist')) // change 
/* server.use('/examples', express.static('examples')) */
server.use('/examples', express.static('examples'))

// example REST API routes
require('./routes/video-example.js')(server, db)
require('./routes/audio-example.js')(server, db)

// custom REST API routes
require('./api-description.js')(host, server)
require('./routes/users.js')(server, db)
require('./routes/login.js')(server, db)
require('./routes/concerts.js')(server, db)


// generic REST API one-to-one table mappings
require('./routes/generic-routes.js')(server, db)

server.get('*', (req, res)=>{
  res.sendFile(__dirname + '/frontend/dist/index.html')
})