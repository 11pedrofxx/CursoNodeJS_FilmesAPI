import { searchMovie } from "../../repository/filmeRepository.js";
import validarNome from "../../validation/movie/consultapornomeValidation.js";


export default async function buscarpornome(nome) {

    validarNome(nome)
    let registros = await searchMovie(nome)
    return registros

}