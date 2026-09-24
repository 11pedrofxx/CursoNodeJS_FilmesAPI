import { postFilme } from "../repository/filmeRepository.js";

import { Router } from "express";

const endpoints = Router();
 

endpoints.post ('/Filme', async (req, resp ) => {

    let filme = req.body
    let id = await postFilme(filme)
    resp.send ({

        id

    })

})




export default endpoints;