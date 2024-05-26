var pilha = [];

console.log(pilha);
pilha.push(1);

pilha.push(2);
console.log(pilha);

pilha.push(3);
console.log(pilha);

pilha.push(4);
console.log(pilha);

pilha.push(5);
console.log(pilha);

//retirando objetos da pilha FILO = Primeiro a entrar Último a sair
let tamanho = pilha.length;
console.log("O tamanho da pilha é: " + tamanho);
if(tamanho => 3){
    console.log("A pilha está cheia, último elemento removido!");
    pilha.pop();
    console.log(pilha);
};




