import { editFilme } from "../../repository/filmeRepository.js"
import validaredicao from "../../validation/movie/editFilmeValidation.js";


export default async function updatefilmeservice (filme, id) {

    let linhasafetadas = await editFilme(filme, id);
    validaredicao(linhasafetadas)

}