module.exports = function(server, db){

    server.get('/data/:table', (req, res)=>{ // but limit which tables to query with ACL
        let query = "SELECT * FROM " + req.params.table
        let result = db.prepare(query).all()
        res.json(result)
    })

    server.get('/data/:table/:id', (req, res)=>{ // but limit which tables to query with ACL
        let query = "SELECT * FROM " + req.params.table + " WHERE id = @id"
        let result = db.prepare(query).all(req.params)
        res.json(result[0])
    })

    server.post('/data/:table', (req, res)=>{ // but limit which tables to query with ACL
        let query = `INSERT INTO ${req.params.table} (${Object.keys(req.body).join(', ')}) VALUES(@${Object.keys(req.body).join(', @')})`
        let result
        try{
          result = db.prepare(query).run(req.body)
        }catch(e){
          console.error(e)
        }
        res.json(result)
    })

    server.put('/data/:table/:id', (req, res)=>{ // but limit which tables to query with ACL
        let query = `UPDATE ${req.params.table} SET`
        for(let key of Object.keys(req.body)){
            query += ` ${key}=@${key},`
        }
        query = query.replace(/\,$/,'')
        query += ` WHERE id = ${req.params.id}`        
        let result
        try{
          result = db.prepare(query).run(req.body)
        }catch(e){
          console.error(e)
        }
        res.json(result)
    })

}