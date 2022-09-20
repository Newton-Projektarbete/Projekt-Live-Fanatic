module.exports = function (server, db) {

    server.get('/data/ticket', (req, res) => {
      let query = "SELECT * FROM ticket"
      let result = db.prepare(query).all()
      res.json(result)
    })
  
    server.get("/data/ticket/:ticket_id", (req, res) => {
      let query = "SELECT * FROM ticket WHERE ticket_id = @ticket_id"
      let result = db.prepare(query).all()
      res.json(result[0])
    })
  
  
  }