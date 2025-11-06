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

  if (acao === "rq") {
    console.log("Saindo!");
    process.exit();
  }
}
