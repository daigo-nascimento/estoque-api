import dotenv from 'dotenv'
dotwnv.config();


import {loggerMiddleware, valorProdutoMiddleware} from `./src/middleware/index.js`
import express from `express`;

//require('dotenv').config();
//const express = require('express');
const app = express();

const port = 3000;

//Middleware to formatar o body para JSON
app.use(json());
//Para formatar os dados do formulário (x-www-form-urlencoded)
app.use(urlencoded({extended: true}));

app.use(loggerMiddleware);
app.use(valorProdutoMiddleware);



//parametros da função: req = requisição / res = resposta
app.get('/', function(req,res){
    res.send('Bem vindo ')
});

app.post('/produtos',(req, res) => {
    let produto = req.body
    res.send()
})

app.put('/produtos/:id', (req, res) => {
    let id = req.params.id
    res.send(`O produto${id} foi alterado.`)
})

app.delete('/produtos/:id', (req, res) => {
    let id = req.params.id
    res.send(`O produto${id} foi excluido.`)
})


app.listen(port, function(){
    console.log('servidor rodando na porta ' + port)
});