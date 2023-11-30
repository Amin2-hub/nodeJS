//import require 가져오는것은 두가지방식이있음
// const cal = require('./calculator');  //보통 위에 선언
const { add, minus } = require('./calculator');  //사용하고자 하는것만 불러오는 경우가 많음
//노드는 같은폴더안에있는 파일을 가져올때 ./    상위폴더 ../
//경로 설정이 빠지면 외부 라이브러리(설치한 모듈중 하나)를 사용하겠다는 뜻
//cal.add 방식으로 사용해도됨

console.log(add(10,25));
console.log(minus(25,3));