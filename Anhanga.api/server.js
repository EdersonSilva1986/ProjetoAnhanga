'use strict'

const app = require('../Anhanga.api/bin/express');
const variables = require('../Anhanga.api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
    //ou assim 
    //console.info('Api inicializada com sucesso na porta ' + variables.Api.port + '.');
});


/*
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//CRUD
//Verbs http (Verbos http)

let pessoas = [];

// R - READ
app.get('/',(req, res) => {
    res.status(200).send(pessoas);
});

//C - CREATE
app.post('/',(requisicao,resposta) =>{
    console.log('Corpo:', requisicao.body);
    pessoas.push(requisicao.body);
    resposta.status(201).send(requisicao.body);
});

//U - UPDATE
app.put('/',(req,res) =>{
    let pessoaEncontrada = pessoas.filter(pes =>{return pes.id == req.params.id});
    pessoaEncontrada = req.body;
    res.status(202).send(pessoaEncontrada);
});

//D - DELETE
app.delete('/:id',(req,res) =>{
    for (let index = 0; index < pessoas.length; index++){
        const pessoa = pessoas[index];
        if (pessoa.id == req.params.id){
            pessoas.splice(index,1);
        }
    }
    res.status(204).send('Registro excluído')
});

// erro
//400 - bad request
//401 - unauthorized
//500 - internal server error

app.listen(3000, () => {
    console.log('Servidor API Anhanga iniciado na porta 3000.');
});
*/