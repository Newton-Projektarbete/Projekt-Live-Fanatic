module.exports = function(server, db){

    server.get('/data/ticket', (req, res)=>{
        let query = "SELECT * FROM ticket"
        let result = db.prepare(query).all()
        res.json(result)
      })

      server.get('/data/ticket/valid', (req, res)=>{
        let query = "SELECT * FROM ticket JOIN concert ON ticket.concert_id = concert.concert_id ORDER BY concert.performance_date"
        let result = db.prepare(query).all()
        res.json(result)
      })

}