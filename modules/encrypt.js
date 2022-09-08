import { createRequire } from "module";
const require = createRequire(import.meta.url);

const crypto = require("crypto")
const salt = "toaheriaheithfd".toString('hex')

function encrypt(password){ // utility att skapa kryperade lösenord
  let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString('hex')
  return hash
}

export default encrypt