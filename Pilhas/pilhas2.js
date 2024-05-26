//versão melhorada da estrutura de classe pilha, dessa vez criando uma classe que irá ser utilizada para modificar os elementos da pilha
class pilha {
    constructor(){ //método construtor como um dos objetos utilizados na classe
        this.itens = [];
    }

    push(item){
        this.itens.push(item);
    }

    pop(){
        if(this.isEmpty()){
            return "A pilha está vazia!";
        }

        return this.itens.pop();
    }

    isEmpty(){
        return this.itens.length === 0;
    }

    peek(){
        if(this.isEmpty()){
            return "Não é possível pegar elementos da pilha, está vazia!";
        }

        return this.itens[this.itens.length - 1];
    }

    clear(){
        this.itens = [];
    }
}
