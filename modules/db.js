import { createRequire } from "module";
const require = createRequire(import.meta.url);
/* const dbFile = require('../database/live_fanatic.db') */


import Database from 'better-sqlite3'

let database = null

//  module.exports = function db(path){
//   if(!database){
//     database = require('better-sqlite3')(path, {fileMustExist: true /*, verbose: console.log*/ })
//   }
//   return database
// } 


function dbCheck(path){
  if(!database){
    database = new Database(path, {fileMustExist: true /*, verbose: console.log*/ })
  }
  return database
} 

export default dbCheck