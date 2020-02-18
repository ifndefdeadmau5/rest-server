const express = require('express')
const bparser = require('body-parser');
const app = express()
const port = 3000


// body parser
app.use(bparser.urlencoded({ extended: true }));
app.use(bparser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/login', (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;

    // DB 조회
    // 비밀번호 대조
    // 성공, 실패 여부에 따른 동작

    res.send('Hello World!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
