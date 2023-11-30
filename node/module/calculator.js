const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}
function minus(num1, num2){
    return num1 - num2;
}

function multi(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

//export = 객체     내보내고자하는것에 대해 객체형태로 정의하겠다는 뜻
module.exports={
    defaultNum,
    add,
    minus,
    multi,
    divide
    //키가 변수명과 같을경우 약어로 사용(서버쪽에서 많이 사용)
    //원래는 키:밸류 형태  
    //독립된 라이브러리 
}

// export default{
//     //이 방식으로 내보낼 경우 import로 받아야함
//     //exports랑 구분해야함
// }