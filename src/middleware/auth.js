const jwt = require('jsonwebtoken')
const auth = async (req,res,next) =>{

    try{
        const token = req.header('Authorization')
       if(token!=''){
           next()
       }
    } catch(e){
        res.status( 401).send({error:'Please Authendicate'})
    }
}
module.exports = auth