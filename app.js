const express = require('express');
const { sequelize, User } = require('./models');

const app = express();
app.use(express.json);

app.post('/users',async(req,res)=>{
    const {name, email,role} = req.body
    try {
       const user =  await User.create({name,email, rol});
       return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err)
        
    }
})

app.listen({port: 5000} , async(req,res)=>{
    console.log('server on up local host 5000')
    await sequelize.sync({alter : true})
    console.log('database synced');
})