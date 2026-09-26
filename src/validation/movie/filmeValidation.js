

export default function (filme) {

    if (!filme.filme) {

        throw new Error(`O nome do filme é obrigatorio`);

    }

    if (!filme.sinopse) {

        throw new Error(`Você deve informar a sinopse do filme`);

    }

    if (filme.avaliacao == undefined || isNaN(filme.avaliacao) || filme.avaliacao < 0 || filme.avaliacao > 10) {

        throw new Error(`A avaliação está errada. Você deve informar um numero entre 0 a 10`);

    }

    if (!filme.lancamento) {

        throw new Error(`Você deve informar a data de lançamento do filme`);

    }

    if (filme.disponivel == undefined) {

        throw new Error(`Você deve informar se o filme está dísponivel`);

    }

}