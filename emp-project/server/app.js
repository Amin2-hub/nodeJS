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

app.get('/emps', async(req, res) => {
   let list = await mysql.query('empList');
   res.send(list);
});

app.get('/emps/:no', async(req, res) => {
   let data = req.params.no;
   let list = (await mysql.query('empInfo', data))[0];
   res.send(list);
});

app.get('/dept', async(req, res) => {
   let list = await mysql.query('deptList');
   res.send(list);
});

const empTable = ['emp_no', 'first_name', 'last_name', 'gender', 'hire_date'];
const deptEmpTable = ['emp_no', 'dept_no', 'from_date', 'to_date'];
const salariesTable = ['emp_no', 'salary', 'from_date', 'to_date'];

app.post('/emps', async (req,res) => {
   let empInfo = req.body.param;
   let empData = {};
   for(let col of empTable){
      let value = empInfo[col];
      if(value == '') continue;
      empData[col] = value;
   }
   console.log(empData);
   let result = await mysql.query('empInsert', empData);

   let deptData = [];
   for(let col of deptEmpTable){
      let value = empInfo[col];
      if(value == '') continue;
      deptData.push(value);
   }
   console.log(deptData);
   let result2 = await mysql.query('deptInsert', deptData);

   let salData = {};
   for(let col of salariesTable){
      let value = empInfo[col];
      if(value == '') continue;
      salData[col] = value;
   }
   salData.to_date = '9999-01-01';
   console.log(salData);
   let result3 = await mysql.query('salInsert', salData);

   res.send([result,result2,result3]);
});

app.put('/emps/:no', async (req, res) => {
   let data = [req.body.param, req.params.no];
   let result = await mysql.query('empUpdate', data);
   res.send(result); 
});


app.delete('/emps/:no', async (req, res) => {
   let data = [req.body.param.to_date, req.params.no];
   let result = await mysql.query('empDelete', data);
   res.send(result); 
});



