 import connection from "./connection.js";

// sempre colocar await e async na função, pois o sql demora um tempinho para executar o comando, então os dois esperam o comando rodar no sql.
export async function postFilme(filme) {

    // Montamos o comando SQL que será executado no banco.

    // Os "?" são espaços reservados para os valores que vamos enviar depois. Isso ajuda a evitar problemas com SQL Injection.
    let command = `
        insert into tb_filme (filme, sinopse, avaliacao, lancamento, disponivel)

        values (?, ?, ?, ?, ?)
    `;


    // Executa o comando SQL no banco de dados. O primeiro argumento é o comando SQL.
    // O segundo argumento é um array com os valores
    // que irão substituir cada "?" na mesma ordem.
    // Exemplo:
    // primeiro ? -> filme.filme
    // segundo ?  -> filme.sinopse
    // terceiro ? -> filme.avaliacao
    // quarto ?   -> filme.lancamento
    // quinto ?   -> filme.disponivel
    let resposta = await connection.query(command, [
        filme.filme,
        filme.sinopse,
        filme.avaliacao,
        filme.lancamento,
        filme.disponivel
    ]);


    // O connection.query() retorna mais de uma informação
    // dentro de um array.
    //
    // A posição 0 contém as informações sobre o resultado
    // da operação que acabamos de realizar.
    let info = resposta[0];


    // Quando fazemos um INSERT, o MySQL gera automaticamente
    // um ID para o novo registro (se a coluna estiver configurada
    // como AUTO_INCREMENT).
    // O insertId contém exatamente esse ID gerado.
    let filmeid = info.insertId;


    // Retornamos o ID para quem chamou a função.
    //
    // Assim, outra parte da aplicação pode saber
    // qual foi o ID do filme que acabou de ser cadastrado.
    return filmeid;
}



export async function searchMovie(nome) {

    const command = `

    select id_filme            id,
    filme                      nomeFilme, 
    avaliacao, 
    lancamento,
    disponivel
    from tb_filme
    where filme like ?

    `

    let resposta = await connection.query(command, [ '%' + nome + '%' ]);
    let registros = resposta[0];

    return registros;
}

export async function buscarnNomeIgual(nome) {

    const command = `

    select id_filme            id,
    filme                      nomeFilme, 
    avaliacao, 
    lancamento,
    disponivel
    from tb_filme
    where filme = ?

    `

    let resposta = await connection.query(command, [nome]);
    let registros = resposta;

    return registros;
}


export async function buscarId(id) {

    const command = `

    select id_filme,
    filme,
    sinopse,
    avaliacao,
    lancamento,
    disponivel, 
    capa from tb_filme
    where id_filme = ?

    `
    let resposta = await connection.query(command, [id])
    let registros = resposta[0];
    return registros;
}

export async function editFilme(filme, id) {

    const command = `
    
    update tb_filme
        set filme = ?,
        sinopse = ?,
        avaliacao = ?,
        lancamento = ?,
        disponivel = ?
    where id_filme = ?;

    `

    let resposta = await connection.query(command, [

        filme.filme,
        filme.sinopse,
        filme.avaliacao,
        filme.lancamento,
        filme.disponivel,
        id

    ])

    let info = resposta[0];
    let linhasafetadas = info.affectedRows

    return linhasafetadas;

}

export async function todosfilme() {

    const command = `
    select * from tb_filme
    `

    let resposta = await connection.query(command, []);
    let registros = resposta[0];
    return registros;

}