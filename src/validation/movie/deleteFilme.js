export default function validarDelete(linhasafetadas) {

    if (linhasafetadas == 0) {

        throw new Error('Não foi possível deletar o filme. Verifique se o ID está correto');

    }

}