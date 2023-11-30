//화살표함수 : 간단한 함수나 익명함수사용시 주로 사용
//this. 사용못함 만약 사용시 그 상위인 window 호출

//함수선언식 - 어디서 선언되었던지 외부라이브러리에서 사용가능 (var선언자와 비슷) 밑에배치
//            덮어쓸수있음(변경될수있음)
function hello(name){
    return "Hello, " + name;
}

let arrHello = (name)=>{return "Hello, " + name;}
arrHello = name => "Hello, " + name             //매개변수하나고 실행코드가 리턴코드하나만있을시 괄호 생략가능

//함수표현식 - 해당함수가 사용되기전에 선언이되어야 사용가능 (요즘사용방식) 위에배치
const message = function (msg){
    return "msg : " + msg;
}

let arrMessage = (msg)=>{"msg : " + msg;}
arrMessage = msg => "msg : " + msg;
arrMessage = () => { 
                        let today = new Date().getDay();
                        console.log("오늘 날짜", today);
                    }

function hello(msg){
    return "msg, Hello : " + msg;
}

console.log(hello("world"));

