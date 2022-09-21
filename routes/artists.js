const { request } = require("express")

module.exports = function (server, db) {

  server.get('/data/artist', (req, res) => {
    let query = "SELECT * FROM artist"
    let result = db.prepare(query).all()
    res.json(result)
  })

/*   server.get("/data/artist/:artist_id", (req, res) => {
    let query = "SELECT * FROM artist WHERE artist_id = @artist_id"
    let result = db.prepare(query).all()
    res.json(result[0])
  }) */

  server.get("/data/artist/:searchterm", (req, res) => {
    let artist = req.body
    let searchTerm = artist.artist_name
    /* let searchTerm = "%" + artist.artist_name + "%" */
    console.log("req:")
    /* console.log(req) */
    console.log("-------")
    console.log("res:")
    /* console.log(res) */
    console.log("-------")
    let query = "SELECT * FROM artist WHERE artist_name LIKE searchterm"
    let result = db.prepare(query).all()
    /* let query = db.prepare("SELECT * FROM artist WHERE artist_name LIKE (?)").run(searchTerm) */
    res.json(result)
  })


}
