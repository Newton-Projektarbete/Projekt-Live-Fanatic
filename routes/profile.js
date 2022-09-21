module.exports = function(server, db){


    server.get('/data/favorite', (req, res)=>{
        let query = "SELECT * FROM favorite"
        let result = db.prepare(query).all()
        res.json(result)
      })
/* 
server.post('/data/favorite', (request, response) => {
    let user = request.body
    let result 
    try{
      result = db.prepare('INSERT INTO favorite (user_id, concert_id) VALUES(?,?)').run([user.user_id, concert.concert_id])
    }catch(e){
      console.error(e)
    }
    response.json(result)
  })
  */
}
