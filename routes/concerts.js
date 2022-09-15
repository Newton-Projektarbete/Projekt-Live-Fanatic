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

    }