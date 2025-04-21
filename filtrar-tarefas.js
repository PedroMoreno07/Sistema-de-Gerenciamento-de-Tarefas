import { lerArquivoJSON } from "./lerEescrever.js";
export const visualizarTarefaTrue = async function () {
  const listaTarefas = await lerArquivoJSON();
  const visualizarTarefa = listaTarefas.filter(
    (elemento) => elemento.concluida === true
  );
  console.log(visualizarTarefa);
};
export const visualizarTarefaFalse = async function () {
  const listaTarefas = await lerArquivoJSON();
  const visualizarTarefa2 = listaTarefas.filter(
    (elemento) => elemento.concluida === false
  );
  console.log(visualizarTarefa2);
};
