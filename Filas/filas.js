let fila = [];


fila.push("mamaco");

fila.push(" vacalo");

fila.push(" girafo");

console.log("Objetos em sequência na fila: " + fila);
console.log("A fila está andando.");

fila.shift();
console.log("Fila atualizada:\n" + fila);

fila.push(" leonidas");
console.log("Entrou mais um: " + fila);

fila.shift();
console.log("Saiu outro: " + fila);