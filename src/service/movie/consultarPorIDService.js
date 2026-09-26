import { buscarId } from "../../repository/filmeRepository.js";
import validarid from "../../validation/movie/consultaporid.js";

export default async function buscabyid(id) {

    let registros = await buscarId(id);
    validarid(id, registros)
    return registros;


}