let database = null;

module.exports = function db(path){
  if(!database){
    database = require('better-sqlite3')(path, {fileMustExist: true /*, verbose: console.log*/ })
  }
  return database
}