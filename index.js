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
// set to true to bypass 2FA verification (do this in dev only)
const bypass2FA = true

// set bypass 2FA verification 
server.use(function(req,res,next){req.bypassVerification = bypass2FA; next()})

// ACL
const acl = require('./services/acl.js')
//server.use(acl) // kommentera bort för att tillfälligt stänga av all autentisering

// start
server.listen(port,() => {
  console.log(host)
  console.log('server running on port ' + port)
})

// front end directories
server.use('/', express.static( "whatever-directory-for-react-build")) // change 
server.use('/examples', express.static('examples'))

// example REST API routes
require('./routes/video-example.js')(server, db)
require('./routes/audio-example.js')(server, db)

// custom REST API routes
require('./api-description.js')(host, server)
require('./routes/users.js')(server, db)
require('./routes/login.js')(server, db)

// generic REST API one-to-one table mappings
require('./routes/generic-routes.js')(server, db)

server.get('*', (req, res)=>{
  res.sendFile(__dirname + '/whatever-directory-for-react-build/index.html')
})
