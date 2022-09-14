module.exports = function(server, db){

    server.get('/data/concert', (req, res)=>{
        let query = "SELECT * FROM concert"
        let result = db.prepare(query).all()
        res.json(result)
      })

    }