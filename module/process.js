// import process from 'process';  
const process = require('process');
const os = require('os');
//전역변수라 require로 써도되고 import도 안써도됨(써주는게 가독성이좋긴함)
console.log(process.env.JAVA_HOME);
console.log('--------------------------------');
console.log(os.cpus());  //CPU코어정보호출
console.log('--------------------------------');
console.log(os.tmpdir()); //임시저장경로확인