import { editFilme } from "../../repository/filmeRepository.js"


export default async function updatefilmeservice (filme, id) {

    let linhasafetadas = await editFilme(filme, id);
    if (linhasafetadas === 0) {

        throw new Error("Nenhum filme foi alterado. Verifique se o ID está correto.")

    } 
 

}