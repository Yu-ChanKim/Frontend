//배열 리터럴
const arr = [1, 2, '문자열', {},];
const [a, b] = arr;
console.log(a);
console.log(b);

//객체 리터럴
const user =  {
    id : 'addjkf',
    name : 'jacob',
    data : [1,2,3,4,]
}
console.log('------------------');
const {id,name,data,} = user;
console.log(id);
console.log(name);
console.log(data);

//함수
function f(x){
    console.log('호출됨!')
}

f(1);
f(1,2,3,);


//???

console.log(message);
var message;

console.log(message);
const message;

console.log(message);
let message;

//???
const name = 'hi';
function f(x){
    console.log(name)  //가능
    console.log(x)     //불가
}
f(5)
x

//???
console.log('블록 이전에 호출');
{
    console.log('블록 내부에서 호출됨')
    const x = 1 
    console.log(x)
    {
        console.log('블록 내부 2에서 호출됨')
        const y = 5
        console.log(y)
    }
    console.log(y)
}
console.log(x);

//masking, shadowing
console.log('블록 이전에 호출');
{
    console.log('블록 내부에서 호출됨')
    const x = 1 
    const block1 ='블록1이란다'
    console.log(x)
    {
        const x = '다른거'
        console.log(x);
        console.log(block1)
    }
    console.log(x)
}

//???
const name = 'jacob'
function f(x) {
    console.log(x)
    console.log(name)
}
f(x)

//???
console.log('블록 이전에 호출')
{
    const x = 10
    const block1 = '블록 1이란다'
    console.log(x)
    {
        const x = '다른 타입의 값'
        console.log(x)
        console.log(block1)
    }
}

//
function sayHelloTo(name){
    const message = `Hello ${name}!`
    return function(){
        console.log(message)
    }
}

const hello1 = sayHelloTo('jacob')
const hello2 = sayHelloTo('test')
const hello3 = sayHelloTo('hi')
hello1();
hello2();
hello3();


//렉시컬 스코핑
function outer(){
    const name = '바깥임'
    function showName() {
        const n = '안쪽데이터'
        console.log(`바깥 : ${name}, 안: ${n}`)
    }
    return showName;
}
const f1 = outer()
f1()  //showName

// 렉시컬 스코핑
const dd = 'ㅇㅇ'
function outer(){
    const name = "밖에 있어요"  // 렉시컬 스코프의 유효범위
    function closure(){         // 클로저
        const inner = '내부에'
        console.log(`${name}, ${inner}, ${dd}`)
    }
    return closure
}

const f1 = outer();
f1()


//클로저 문제 실패
function countdown(x){
    let s = x;
    function counter(){
        x--;
        this.x = x;
        console.log(s)
    }
    return counter
    
}
const counter = countdown(10)
counter()
counter()


//원하는 출력 결과
const counter = countdown(10)
counter() //10
counter() //9
counter() //8
counter() //7
//...
counter() //0


//정답
function countdown(startAt){
    let data = startAt;
    function counter(){
        console.log(data--)
    }
    return counter
}

const counter = countdown(10)
const counter1 = countdown(10)
counter()   //10
counter()   //9
counter()   //8
counter1()  //10
counter1()  //9

//응용
function countdown(startAt){
    let data = startAt;
    function counter(){
        console.log(`${data++}회 호출됨`)
    }
    return counter
}
const counter = countdown(1)
counter()   
counter()   
counter()   


//응용 답
function countdown(){
    let s = 0
    function counter() {
        console.log(`${++s}회 호출됨.`)
    }
    return counter
}
const c1 = countdown(10)
c1()
c1()
c1()

// java 버전
class 클로저 {
    멤버;
    생성자(파라미터) {
        //초기화
        멤버 = 파라미터
    }
    메서드(){

    }
}

function 생성자(파라미터){
    //초기화
    멤버 = 파라미터
    function 메서드() {

    }
    return 메서드
}

//javascript 이런식으로도 가능 => 바벨, typescript 사용하면 좋다.
(function (x){
    console.log(`파라미터 ${x}`)
})(5)