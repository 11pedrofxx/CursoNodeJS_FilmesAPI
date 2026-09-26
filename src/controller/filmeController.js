import { Router } from "express";
import saveMovie from "../service/movie/postFilmeService.js";
import buscarpornome from "../service/movie/consultarFilmeService.js";

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


export default endpoints;