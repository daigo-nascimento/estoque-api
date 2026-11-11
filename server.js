require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

//parametros da função: req = requisição / res = resposta
app.get('/', function(req,res){
    res.send('ola mundo, minha senha é ' + process.env.senhaBancoDeDados)
});

app.listen(port, function(){
    console.log('servidor rodando na porta ' + port)
});