import { lerArquivoJSON, escreverArquivoJSON } from "./lerEescrever.js";
import { criarNovaTarefa } from "./criar-nova-tarefa.js";
import {
  visualizarTarefaTrue,
  visualizarTarefaFalse,
} from "./filtrar-tarefas.js";
import { concluirTarefas } from "./concluirTarefas.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
let permicao = false;
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
      await criarNovaTarefa();
      break;
    case 2:
      console.log(await lerArquivoJSON());
      break;
    case 3:
      await visualizarTarefaTrue();
      break;
    case 4:
      await visualizarTarefaFalse();
      break;
    case 5:
      await concluirTarefas();
      break;
    case 6:
      permicao = true;
      break;
    default:
      break;
  }
} while (permicao === false);
{
  console.log("Você saiu do menu!");
}
