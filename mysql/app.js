require('dotenv').config({ path: './db/mysql.env' });
const express = require("express");
const app = express(); //서버역활을 해줄 인스턴스
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, ()=>{
    console.log('Server Start');
});

app.get('/customerList', async(req, res) => {
    let list = await mysql.query('customerList');
    res.send(list);
});