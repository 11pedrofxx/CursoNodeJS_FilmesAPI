

export default function validarNome(nome, registros) {

    if (!nome) {

        throw new Error(`Você deve informar o nome do filme para fazer a consulta`);

    }

    if (registros.length === 0) {

        throw new Error(`Esse filme que você está procurando não existe ou foi removido`)

    }



}