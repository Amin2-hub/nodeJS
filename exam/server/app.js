require('dotenv').config({ path : './db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
   limit : '50mb'
}));

app.listen(3000, ()=>{
   console.log('서버가 실행됩니다.');
   console.log('http://localhost:3000');
});  

app.get('/', (req, res)=>
{
   res.send(`<h2>welcome to server</h2>`);
});

app.get('/boardList', async(req, res) => {
   let list = await mysql.query('boardList');
   res.send(list);
});

app.get('/boardInfo/:no', async(req, res) => {
   let data = req.params.no;
   let list = (await mysql.query('boardInfo', data))[0];
   res.send(list);
});

app.get('/commentInfo/:no', async(req, res) => {
   let data = req.params.no;
   let list = await mysql.query('commentInfo', data);
   res.send(list);
});

app.put('/board/:no', async (req,res)=>{
   let data = [req.body.param, req.params.no];
   let result = await mysql.query('boardUpdate', data);
   res.send(result); 
});

app.post('/board', async (req, rep) => {
	let result = await mysql.query('boardInsert', req.body.param);
	rep.send(result);
});