class heroi{
        constructor(nome, idade, tipo){
        this.nome= nome;
        this.idade= idade;
        this.tipo= tipo;
    }
       atacar(){
        let ataque;
        if (this.tipo==="mago"){
            ataque= "usando magia";
             }else if (this.tipo==="guerreiro"){
            ataque= "usando espada";
            
            }else if(this.tipo==="monge"){
            ataque= "usando artes marciais";
            
            }else if (this.tipo==="ninja"){
            ataque= "usando shuriken";
            }
                console.log(`O ${this.tipo} ${this.nome} com a idade ${this.idade} anos atacou o inimigo ${ataque}`);
        }   
   }


let luta= new heroi("Paulo","20", "mago")
luta.atacar()