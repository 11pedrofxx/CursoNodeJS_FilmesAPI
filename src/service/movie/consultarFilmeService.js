import { searchMovie } from "../../repository/filmeRepository.js";
import validarNome from "../../validation/movie/consultapornomeValidation.js";

export default async function buscarpornome(nome) {
    // 1. Primeiro buscamos os filmes no banco usando apenas o nome
    let registros = await searchMovie(nome);

    // 2. Agora que temos a resposta do banco, passamos o nome e os registros para a sua validação
    validarNome(nome, registros);

    // 3. Se a validação não der nenhum erro (throw new Error), ele retorna os dados
    return registros;
}