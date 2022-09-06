const crypto = require("crypto")
const salt = "toaheriaheithfd".toString('hex')

module.exports = function(password){ // utility att skapa kryperade lösenord
  let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString('hex')
  return hash
}