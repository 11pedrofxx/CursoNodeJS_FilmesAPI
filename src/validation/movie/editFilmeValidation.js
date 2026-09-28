

export default function validaredicao(linhasafetadas, id) {

    if (linhasafetadas === 0) {

        throw new Error("Nenhum filme foi alterado. Verifique se o ID está correto.")

    } 
 

}