module.exports = function(server, db){

    server.get('/data/concert', (req, res)=>{
        let query = "SELECT * FROM concert"
        let result = db.prepare(query).all()
        res.json(result)
      })

    
    server.get('/data/concert/1', (req, res)=>{
      let query = "SELECT * FROM concert WHERE concert_id = 1"
      let result = db.prepare(query).all()
      res.json(result)
    })

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

  }
