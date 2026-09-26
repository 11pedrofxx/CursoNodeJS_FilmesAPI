

export default function validarNome(nome) {

    if (!nome) {

        throw new Error(`Você deve informar o nome do filme para fazer a consulta`);

    }

}