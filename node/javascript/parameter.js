function printMsg(msg = '메세지를 입력해주세요', to = ''){
    console.log(msg);
}

printMsg('Have a nice day');
printMsg();



function sum(x,y,...args){
    let result = x+y;
    console.log('크기 : ' + args.length);
    for(let num of args){
        result += num;
    }
    return result;
}

console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
