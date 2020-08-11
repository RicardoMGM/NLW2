import express from 'express';

const app = express();

app.listen(3333);

app.use(express.json());

//-----rota-----|-recurso-
//localhost:3333/users

//----Parâmetros----
//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação


app.get('/', (request, response) => {
    return response.send("Hello World")
});