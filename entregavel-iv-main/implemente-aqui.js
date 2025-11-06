import promptSync from "prompt-sync";
import { binarySearch } from "./search/binary-search.js";
import { linearSearch } from "./search/linear-search.js";
import { sentinelSearch } from "./search/sentinel-search.js";
import { bubbleSort } from "./sort/bubble-sort.js";
import { insertionSort } from "./sort/insertion-sort.js";
import { HashTable } from "./structs/hash-table.js";
import { Queue } from "./structs/queue.js";
import { Stack } from "./structs/stack.js";

const prompt = promptSync();

const fila = new Queue();
const atendidos = new Stack();
const atendidosList = [];
const posicao = [];

const enun = `
O que você quer fazer?
[rc] Registrar cliente na fila
[ac] Atender o próximo cliente
[mc] Mostrar clientes atendidos (a-z)
[pc] Procurar cliente da fila pelo nome
[uc] Ver último cliente atendido
[rq] Mostrar relatório e sair
`.trim();

while (true) {
  console.log(enun);
  const acao = prompt("Ação: ");

  if (acao === "rc") {
    const nome = prompt("Nome do cliente: ");
    const posicao = fila.size + 1;
    fila.enqueue(nome);
    console.log(
      "Cliente " + nome + " Registrado na fila! Posição do cliente: " + posicao
    );
  }

  if (acao === "ac") {
    const nome = fila.dequeue();
    if (nome) {
      atendidos.push(nome);
      atendidosList.push(nome);
      console.log("Cliente " + nome + " atendido! Chamando próximo cliente!");
    } else {
      console.log("Não há clientes na fila!");
    }
  }

  if (acao === "mc") {
    atendidosList.sort();
    console.log(atendidosList);
  }

  if (acao === "pc") {
    const nome = prompt("Nome do cliente: ");
    const arrayFila = fila.toArray();
    const resultado = linearSearch(arrayFila, nome);

    if (resultado !== -1) {
      console.log(
        "Cliente " +
          nome +
          " encontrado na fila, na posição: " +
          (resultado + 1)
      );
    } else {
      console.log("Cliente " + nome + " não encontrado na fila.");
    }
  }

  if (acao === "uc") {
    const nome = atendidos.peek();
    if (nome) {
      console.log("Último cliente atendido: " + nome);
    } else {
      console.log("Não há clientes atendidos!");
    }
  }

  if (acao === "rq") {
    console.log("Relatório:");
    console.log("Clientes atendidos: " + atendidos.size);
    console.log("Clientes na fila: " + fila.size);
    console.log("Ultimo cliente atendido: " + atendidos.peek());
    console.log("Saindo!");
    process.exit();
  }
}
