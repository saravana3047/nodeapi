const express = require('express')

const User = require('./src/models/user')
const auth = require('./src/middleware/auth')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

//middleware
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    if(req.method=='GET'){
        res.send('GET method is not allowed')
    }else{
        next()
    }

})


app.post('/users',auth, async (req,res) => {
    const user = new User(req.body)
    user.save().then(() =>{
        res.send(user)
    }).catch((e) => {
        res.send(e)
    })
})
app.get('/getUsers', async (req,res) => {
     try{
            User.find({},null,{limit:10}, function (err, docs) {
                if (err){
                    console.log(err);
                }
                res.send(docs)
            }).sort({createdAt:'desc'}).skip(0);
     }catch(e){
         res.status(500).send()
     }
})


app.listen(port , () => {
    console.log('server is up on the port ' + port)
})