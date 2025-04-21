import promptSync from "prompt-sync";
import { lerArquivoJSON, escreverArquivoJSON } from "./lerEescrever.js";
const listaTarefas = await lerArquivoJSON();
const prompt = promptSync();
export const concluirTarefas = async function () {
  const pegarId = +prompt("Qual tarefa desejar concluir? ");
  const procurarId = listaTarefas.find((elemento) => elemento.id === pegarId);
  procurarId.concluida = true;
  listaTarefas.splice(pegarId - 1, 1, procurarId);
  await escreverArquivoJSON(listaTarefas);
};
