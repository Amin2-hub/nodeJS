const fs = require('fs');   //File System의 약어
const { Console } = require('console'); //Console : 클래스(대문자)

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');  //단순텍스트파일이라 컬러사용불가능

const logger = new Console({ stdout : output, stderr : errorOutput });   //로그 : 왼쪽경로   에러 : 오른쪽경로
const count = 5;
logger.log('count : %d', 5);
logger.error('count : ' + count);
//실행하면 파일이 생성되고 로그, 에러가 각각의 경로에 기록(서버가 비정상적으로 종료되도 오류메세지가 남아서 파악하기 쉬움)