const accessList = require('../access-list.json')

module.exports = function(request, response, next){

  if(!request.path.split('/')[1].includes('data')){
    return next() // this acl only protects the routes under /data
  }

  // we may have user roles from the db, OR the anonymous role from here
  let user = request.session?.user || {roles:['anonymous']}
  // and anyone has the wildcard role
  user.roles.push('*')

  for(let entry of accessList){
    // am I on this route?
    if(request.path === entry.route || (entry.route.includes('*') && request.path.includes(entry.route.split('*')[0]))){
      // do I have any of the roles in this route object
      for(let role of entry.roles){
        if(user.roles.includes(role.role)){
          // is the method I'm using registered in this route object?
          if(role.methods.includes(request.method)) {
            return next() // success, we have access!
          }
        }
      }
    }
  }

  // if user has no access
  return response.status(403).json({error: "no access"})
}

/*
module.exports = function(req, res, next){

  if(!req.path.split('/')[1].includes('data')){
    return next() // this acl only protects the routes under /data
  }

  // "deep exists"
  let roles = req.session?.user?.roles || ['anonymous']
  roles.push('*') // always add any match (wildcard)

  console.log({
      'req.path': req.path,
      'req.method': req.method,
      'req.body': req.body,
      'req.session.user': req.session.user,
      'roles': roles,
      'accessList': accessList
  })

  let found = false

  for(access of accessList){
    if(req.path.match(new RegExp(access.path))){ // @todo undersöka strikt matchning
      for(role of access.roles){
        if(roles.includes(role.role)){
          // @todo ackumulera rättiheter (kanske har flera roller, hitta bästa/högsta rättigheterna)
          if(role.methods.includes(req.method)){ // @todo case independent match?
            found = true
            console.log('got access to ',access.path, ' with role ', role.role,' and method ', role.methods)
          }
        }
      }
    }
  }

  if(found){
    next()
  }else{
    res.status(403) // @todo skriva logik för att ge "rätt" felmeddelande, som 401 eller 403 beroende på om jag är inloggad eller inte
    res.json({error: "You don't have access"})
  }
}
*/
