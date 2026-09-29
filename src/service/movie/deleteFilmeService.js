import { deleteFilme } from "../../repository/filmeRepository.js"
import validarDelete from "../../validation/movie/deleteFilme.js";


export default async function deleteFilmeService (id) {

    let linhasafetadas = await deleteFilme(id);
    validarDelete(linhasafetadas)

    return linhasafetadas;

}