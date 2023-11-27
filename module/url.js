const url = require('url');
let legercy = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(legercy);

let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');  
//내부에있는 값을 꺼낼때 위의 방식보다 훨씬 편하게 작업가능
console.log(whatwg);
console.log(whatwg.searchParams);
console.log(whatwg.searchParams.get('query'));