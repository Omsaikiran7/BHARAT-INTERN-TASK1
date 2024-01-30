const express= require('express')
const app = express()
const model = require('./Database/Model')

const cors = require('cors')
app.use(express.json())
const path =require('path')
require('./Database/Connect')

app.use(cors({origin:'*'}))
app.get('/', (req, res) => {
    res.send('welcome')
  });

app.post('/register',async(req,res) =>{


    const {name,email,password,cpassword} = req.body;
    const exist = await model.findOne({email:email})
    if(!exist)
    {
    if(password.length>=8 && password == cpassword)
    {
            const user = new model({
            name:name,
            email:email,
            password:password,
            cpassword:cpassword
        })

       const data =  await user.save();

        return res.send("Registration is successfull")
    }
    else{
        return res.send("password error")
    }
   }
   else{
    res.send("already existing user")
   }

})


const port = 8000
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})