import { Router } from "express";
import saveMovie from "../service/movie/postFilmeService.js";

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




export default endpoints;