import dotenv from 'dotenv'
dotenv.config();


import {loggerMiddleware} from './src/middleware/index.js'
import express from 'express';

//require('dotenv').config();
//const express = require('express');
const app = express();

const port = 3000;

//Middleware to formatar o body para JSON
app.use(express.json());
//Para formatar os dados do formulário (x-www-form-urlencoded)
app.use(express.json({extended: true}));

app.use(loggerMiddleware);




//parametros da função: req = requisição / res = resposta
app.get('/', function(req,res){
     res.status(200).json({
        "status": "OK",
        "codigo": 200,
        "mensagem": `Bem vindo`

    })
});

app.post('/produtos',(req, res) => {
    let produto = req.body
    //res.send()

    res.status(201).json({
        "status": "Criado",
        "codigo": 201,
        "mensagem": `O produto foi criado! Nome: ${produto.nome}, Valor: ${produto.preco}`

    })
})

app.put('/produtos/:id', (req, res) => {
    let id = req.params.id
     res.status(200).json({
        "status": "Alterado",
        "codigo": 200,
        "mensagem": `O produto ${id} foi alterado! Nome: ${produto.nome}, Valor: ${produto.preco}`

    })
})

app.delete('/produtos/:id', (req, res) => {
    let id = req.params.id
    res.status(200).json({
        "status": "Deletado",
        "codigo": 200,
        "mensagem": `O produto ${id} foi removido`

    })
})


app.listen(port, function(){
    console.log('servidor rodando na porta ' + port)
});