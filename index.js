const express = require('express');
const ejs = require('ejs');
const path = require('path');

const PORT = 3000;

const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./templates/views'));

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/currentNews',(req,res)=>{
    res.render('currentNews');
})

app.get('/Blogs',(req,res)=>{
    res.render('Blogs');
})

app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})
