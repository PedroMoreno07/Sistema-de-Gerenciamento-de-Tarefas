import { lerArquivoJSON, escreverArquivoJSON } from "./lerEescrever.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
const listaTarefas = await lerArquivoJSON();
export const criarNovaTarefa = async function () {
  const novoId = listaTarefas.length + 1;
  const novoTitulo = prompt("Digite o titulo da tarefa: ");
  const novoDesc = prompt("Digite a descrição da tarefa: ");
  const novaTarefa = {
    id: novoId,
    titulo: novoTitulo,
    descricao: novoDesc,
    concluida: false,
  };
  listaTarefas.push(novaTarefa);
  const dados = listaTarefas;
  await escreverArquivoJSON(dados);
};
