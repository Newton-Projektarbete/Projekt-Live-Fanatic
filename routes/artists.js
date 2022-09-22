const { request } = require("express")

module.exports = function (server, db) {

  server.get('/data/artist', (req, res) => {
    let query = "SELECT * FROM artist"
    let result = db.prepare(query).all()
    res.json(result)
  })

  server.get("/data/artist/:artist_id", (req, res) => {
    let query = "SELECT * FROM artist WHERE artist_id = @artist_id"
    let result = db.prepare(query).all()
    res.json(result[0])
  })

}
