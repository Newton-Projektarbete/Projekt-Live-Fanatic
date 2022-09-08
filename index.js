// import express from "express"; // new
/* import sqlite3 from "better-sqlite3";
import db from "./modules/db.js" */
 
/* "C:/Users/simon/AppData/Local/Microsoft/TypeScript/4.8/node_modules/@types/express/index" */
//const express = ExpressServer; // new
//const server = express; // new
import { createRequire } from "module"; // new
const require = createRequire(import.meta.url); // new

import dbCheck from "./modules/db.js";
//const db = dbCheck('./database/live_fanatic.db') // new
const db = dbCheck('./database/live_fanatic.db')

const express = require("express"); // old
const server = express(); //old
server.use(express.json())
/* const db = require("./modules/db.js")('./database/live_fanatic.db') // old */
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

import acl from './services/acl.js';
// ACL
//const acl = require('./services/acl.js') // old 
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
//require('./routes/video-example.js')(server, db)
//require('./routes/audio-example.js')(server, db)

// custom REST API routes
/* require('./api-description.js')(host, server)
require('./routes/users.js')(server, db)
require('./routes/login.js')(server, db) */
import api_description from "./api-description.js";
import users from "./routes/users.js";
import login from "./routes/login.js";
api_description(host, server)
users(server, db)
login(server, db)

// generic REST API one-to-one table mappings
require('./routes/generic-routes.cjs')(server, db)

import { dirname } from 'path';
const __dirname = dirname('C:/Users/simon/JS_Projects/Utveckling av Webbapplikationer/Projekt-Live-Fanatic');
// C:/Users/simon/JS_Projects/Utveckling av Webbapplikationer/Projekt-Live-Fanatic
server.get('*', (req, res)=>{
  res.sendFile(__dirname + '/whatever-directory-for-react-build/index.html')
})
