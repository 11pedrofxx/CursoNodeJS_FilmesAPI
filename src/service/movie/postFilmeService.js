import { postFilme, buscarnNomeIgual} from "../../repository/filmeRepository.js";
import filmeValidation from "../../validation/movie/filmeValidation.js";
import { filmeigual } from "../../validation/movie/filmeValidation.js";


export default async function saveMovie(filme) {

        filmeValidation(filme)
        let igual = await buscarnNomeIgual(filme.filme);
        filmeigual(igual);
        let id = await postFilme(filme);
        return id;
}