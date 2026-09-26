import { postFilme } from "../../repository/filmeRepository.js";
import filmeValidation from "../../validation/movie/filmeValidation.js";


export default async function saveMovie(filme) {

        filmeValidation(filme)
        let id = await postFilme(filme);
        return id;

}