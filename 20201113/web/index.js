//express 프레임워크 임포트
const express = require('express')
const app = express()
const PORT = 6600   //포트 번호

//미들웨어 추가
app.use(express.static('./static'))

// //더미 데이터
// const data = {
//     id: '123123214',
//     name: 'jacob',
//     myData: [1,2,3,],
//     timestamp : new Date(),
// }


/**
 * 경로: /data
 * 요청 HTTP 메서드 : GET
 */
app.get('/data', (req, res) =>{
    const data = {
        id: '123123214',
        name: 'jacob',
        myData: [1,2,3,],
        timestamp: new Date(),
    }

    // //data 객체를 json 스트링으로 변경
    // const payload = JSON.stringify(data)
    // res.send(payload)

    //data 객체를 json으로 서빙해줌
    //JSON : JavaScript Object Notation
    res.json(data)
})

//경로 /와 매핑
/**
 * 경로 : /
 * 요청 HTTP 메소드 : GET
 */

// app.get('/',(req, res) => {
//     res.send('Hello Express!')
// });

//애플리케이션 시작!
app.listen(PORT, () =>{
    console.log('애플리케이션이 시작됨.')
});