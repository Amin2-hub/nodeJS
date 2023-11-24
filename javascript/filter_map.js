let words = ['spray', 'limit', 'elite','exuberant', 'paresent'];
let result = words.filter(function(word, idx, arry){
    // console.log(a,b,c,d);
    return word.length > 6;
});

console.log(result);

let users = [
    {
        id : 100,
        name : 'Hong'
    },
    {
        id : 200,
        name : 'Kang'
    },
    {
        id : 300,
        name : 'Lee'
    }
];

result = users.map(function(user){
    return {
        id : user.id,
        name : user.name,
        grade : user.id == 200 ? 'VIP' : '일반'
    }
});