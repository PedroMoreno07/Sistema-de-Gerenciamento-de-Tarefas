import fs from "fs/promises";
const filePath = "./tarefas.json";
export const escreverArquivoJSON = async function (dados) {
  const listaDeTarefa = JSON.stringify(dados, null, 2);
  try {
    await fs.writeFile(filePath, listaDeTarefa, "utf-8");
    console.log("Arquivo atualizado com sucesso!");
  } catch (error) {
    console.error("Erro ao escrever no arquivo: ", error.message);
  }
};

export const lerArquivoJSON = async function () {
  try {
    const dados = await fs.readFile(filePath, "utf-8");
    return JSON.parse(dados);
  } catch (erro) {
    console.log("erro ao ler o arquivo", erro.message);
  }
};
