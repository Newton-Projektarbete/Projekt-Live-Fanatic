module.exports = function(server, db){

    server.get('/data/concert', (req, res)=>{
        let query = "SELECT * FROM concert"
        let result = db.prepare(query).all()
        res.json(result)
      })

/* server.get("/data/concert/:concert_id", (req, res)=>{
      let query = "SELECT * FROM concert WHERE concert_id = @concert_id"
      let result = db.prepare(query).all()
      res.json(result[0])
    }) */

    server.get('/data/concert/recently-added', (req, res)=>{
      let query = "SELECT * FROM concert ORDER BY added_date"
      let result = db.prepare(query).all()
      res.json(result)
    })

    server.get('/data/concert/coming-soon', (req, res)=>{
      let query = "SELECT * FROM concert ORDER BY performance_date"
      let result = db.prepare(query).all()
      res.json(result)
    })

    server.put('/data/concert', (request, response) => {
      let user = request.body
      let result
      try{
        result = db.prepare('UPDATE concert SET ticket_saldo = ? WHERE concert_id = ?').run([user.ticket_saldo, user.concert_id])
      }catch(e){
        console.error(e)
      }
      response.json(result)
    })



  }
