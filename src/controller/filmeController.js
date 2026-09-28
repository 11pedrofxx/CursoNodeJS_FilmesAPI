import { Router } from "express";

import saveMovie from "../service/movie/postFilmeService.js";
import buscarpornome from "../service/movie/consultarFilmeService.js";
import buscabyid from "../service/movie/consultarPorIDService.js";
import updatefilmeservice from "../service/movie/updatefilmeService.js";
import filmesService from "../service/movie/listartodosfilmesService.js";


const endpoints = Router();
 
endpoints.post ('/Filme', async (req, resp ) => {

    try {
        
    let filme = req.body
    let id = await saveMovie(filme);
   
    resp.send ({

        Message: `Filme adicionado.`,
        FilmeID: id

    })

    } catch (error) {
        logError(error)
         resp.status(400).send(ErrorDefault(error))
    }
    
   

})

endpoints.get ('/filme', async (req, resp) => {

    try {
        let nome = req.query.nome
        let registros = await buscarpornome(nome)
        resp.send(registros)
        
    } catch (error) {
        
        logError(error)
        resp.status(400).send(ErrorDefault(error))

    }
    
})

endpoints.get ('/filme/:id', async (req, resp) => {

    try {
        
        let id = req.params.id;
        let filme = await buscabyid(id);
        resp.send(filme)

    } catch (error) {
        logError(error)
        resp.status(400).send(ErrorDefault(error))
    }

})

endpoints.put('/filme/:id', async (req, resp) => {

    try {
        
        let filme = req.body;
        let id = req.params.id;
        
        await updatefilmeservice(filme, id);
        resp.status(204).send();

    } catch (error) {
        logError(error)
        resp.status(400).send(ErrorDefault(error))
    }


})

endpoints.get ('/listarFilmes', async (req, resp) => {

    try {
        
        let resposta = await filmesService();
        resp.send(resposta);

    } catch (error) {
        logError(error)
        resp.status(400).send(ErrorDefault(error))
    }

})


export default endpoints;