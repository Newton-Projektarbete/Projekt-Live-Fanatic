module.exports = function(server, db){

// lägga till i favorit
server.post('/data/favorite', (request, response) => {
    let user = request.body
    let result
    try{
      result = db.prepare('INSERT INTO favorite (user_id, concert_id) VALUES(?,?)').run([user.user_id, user.concert_id])
    }catch(e){
      console.error(e)
    }
    response.json(result)
  })
}
