import { todosfilme } from "../../repository/filmeRepository.js";

export default async function filmesService() {

    let filmes = await todosfilme();
    return filmes;

}