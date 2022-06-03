const express=require('express');
const app=express();
const mysql=require('mysql');
const PORT=3000;
//パスの設定
//これでviewディレクトリにいる
//const path=require('path');
//app.use(express.static(path.join(__dirname,'view')));
//pubilcフォルダ内のファイルも読み込めるようにする。
app.use(express.static('./public'));

const connection=mysql.createConnection({
    host: 'localhost',
    user: 'viewer',
    password: 'pass',
    database: 'list_app'
});

console.log("サーバーを起動中\n");


app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.get('/works',(req,res)=>{
    res.render('works.ejs');
});
app.post('/create',(req,res)=>{
    
})

app.listen(PORT);
