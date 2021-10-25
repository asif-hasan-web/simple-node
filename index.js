const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;

//link this project with load-my-data cors
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hi my name is asif')
})

const users =[
    { id:1, name:'sabana', email:'sabana@gmail.com',phone:'230283409284028'},
    { id:2, name:'rohima', email:'rohima@gmail.com',phone:'2302853409284028'},
    { id:3, name:'korima', email:'korima@gmail.com',phone:'230283409284028'},
    { id:4, name:'sabina', email:'sabina@gmail.com',phone:'2302834t09284028'},
    { id:5, name:'rohim', email:'rohim@gmail.com',phone:'23028345409284028'},
    { id:6, name:'rain', email:'rakin@gmail.com',phone:'230283409284028'}
]
app.get('/users',(req,res)=>{
    // console.log(); 
    const search = req.query.search;
    //use queary perameter eta use kore search letter dile mile mile result chole ashce
    if(search){
        const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }else{
        res.send(users)
    }
    res.send(users);
})

//app.method
app.post('/users',(req,res)=>{
    const newuser=req.body;
    newuser.id = users.length;
    users.push(newuser);
    console.log('hitteing the ', req.body);
    // res.send(JSON.stringify(newuser))
    res.json(newuser)
})

// coll kore user er id pawya (dynamic api)
app.get('/users/:id',(req,res)=>{
    const id= req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','oranges','benana','apple'])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('maks fazli')
})

app.listen(port, ()=>{
    console.log('listening to port', port);
})


