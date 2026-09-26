
export default function validarid (id, registros) {

    if (!id) {

        throw new Error(`Você deve informar o id do filme`);

    }

    if (isNaN(id)) {

        throw new Error(`Você deve informar um número no ID`)

    }

    if (registros.length === 0) {

        throw new Error(`Esse id não corresponde a nenhum filme`);

    }



}