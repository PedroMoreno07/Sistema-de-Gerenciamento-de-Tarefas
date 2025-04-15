import { lerArquivoJSON, escreverArquivoJSON } from "./lerEescrever.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
let permicao = false;
const listaTarefas = { ...(await lerArquivoJSON()) };
do {
  console.log(`
    MENU INTERATIVO DAS TAREFAS
1-Criar uma nova tarefa
2-Visualizar todas as tarefas
3-Visualizar apenas tarefas concluídas
4-Visualizar apenas tarefas não concluídas
5-Concluir uma tarefa
6-Sair
`);
  const pergunta = +prompt(
    "Informe qual das opções do menu você deseja entrar: "
  );
  switch (pergunta) {
    case 1:
      const novaTarefa = {
        id: null,
        titulo: "",
        descricao: "",
        concluida: false,
      };
      const tarefaTitulo = prompt("Digite o titulo da tarefa: ");
      const tarefaDesc = prompt("Digite a descrição da tarefa: ");
      novaTarefa.titulo = tarefaTitulo;
      novaTarefa.descricao = tarefaDesc;
      novaTarefa.id = listaTarefas.tarefas.length + 1;
      listaTarefas.tarefas.push(novaTarefa);
      const dados = listaTarefas;
      await escreverArquivoJSON(dados);
      break;
    case 2:
      await lerArquivoJSON();
      break;
    case 3:

    case 4:

    case 5:

    case 6:
      permicao = true;
    default:
      break;
  }
} while (permicao === false);
{
  console.log("Você saiu do menu!");
}
