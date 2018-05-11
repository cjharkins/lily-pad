const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');


// in pug #{name} is the interpolated syntax

app.get('/',(req,res)=>res.render('index'));
app.get('/skills',(req,res)=>res.render('skills'));

app.get('/cards', (req,res)=> {
	res.locals.hint = '';
	res.locals.prompt = '';
	res.render('cards'); 
});

app.get('/hello',(req,res)=>res.render('hello'));
app.post('/hello',(req,res)=>{
	console.dir(req.body);
	res.render('hello')
});

app.listen(3000,()=>console.log('Server listening on 3000'));