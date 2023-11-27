const path = require('path');

console.log('==절대경로');
console.log(__filename);
console.log(__dirname);
console.log(path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));  //파일이름만 필요할경우
console.log('확장자 : ', path.extname(__filename));  //확장자가 필요할 경우

let pathList = process.env.PATH.split(path.delimiter);   //process.env  환경변수
console.log(path.delimiter, pathList);
console.log('');
console.log(path.sep, pathList[0].split(path.sep));
// console.log(path.sep, pathList[0].split('\\'));