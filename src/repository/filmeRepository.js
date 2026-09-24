 import connection from "./connection.js";

// sempre colocar await e async na função, pois o sql demora um tempinho para executar o comando, então os dois esperam o comando rodar no sql.
export async function postFilme(filme) {

    let command = `
    
    insert into tb_filme (filme, sinopse, avaliacao, lancamento, disponivel)
            VALUES(?, ?, ?, ?, ?)
    
            `

    //query é como se fosse o 'raio' do mysql. Ele será responsavel por excutar o commando.
     let resposta  = await connection.query(command , [ filme.filme, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel ])

     let info = resposta[0] // a resposta é um vetor, então devemos pegar o item na posição 0, pois é no 0 que está a resposta que queremos.

     let filmeid = info.insertId //insertid pega o ID que foi que foi gerado pelo mysql quando colocou o filme na tabela.
     return filmeid // dá o return para que a função faça com que apareca o id do filme. 
}