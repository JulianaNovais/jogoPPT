var pontuacaoJogador = 0;
var pontuacaoMaquina = 0;

function atualizaContadorAdver(){
    pontuacaoMaquina++;
    var elemento = document.getElementById("contAdver");
    elemento.innerHTML = pontuacaoMaquina
}

function voceVenceu(){
    alert('Você venceu!')
}

function maquinaVenceu(){
    alert('A máquina venceu!')
}

function empate(){
    alert('Empate')
}

var emJogo = false;

var jogar = prompt('Vamos jogar? 1-SIM / 2 - NÃO')

if (jogar == 1) {
    emJogo = true;
} else {
    emJogo = false;
}


while (emJogo) {
    
    alert("Bem-vindo ao jogo!")
    var escolhaJogador = parseInt(prompt("Escolha entre: 1- Pedra, 2- Papel, 3- Tesoura"));
    var escolhaMaquina = Math.floor(Math.random() * (3 - 1 + 1) + 1)

    switch(escolhaJogador){
        case 1:
            if(escolhaMaquina == 2){
                atualizaContadorAdver();
                maquinaVenceu()
                //atualizaContadorAdver();
            } else if(escolhaMaquina == 3){
                pontuacaoJogador ++;
                voceVenceu()
            } else{
                empate()
            }
            break;
        case 2:
            if(escolhaMaquina ==3){
                
                atualizaContadorAdver()
                maquinaVenceu()
               //atualizaContadorAdver();
            } else if(escolhaMaquina ==1){
                pontuacaoJogador ++;
               voceVenceu()
            } else{
                empate()
            }
            break;
        case 3:
            if(escolhaMaquina ==1){
                atualizaContadorAdver()
                maquinaVenceu()
                //atualizaContadorAdver();
            } else if(escolhaMaquina ==2){
                pontuacaoJogador ++;
                voceVenceu()
            } else{
                empate()
            }
            break;
    
            }    

    if(pontuacaoJogador ==2){
        alert('Parabéns, você ganhou o jogo!')
        emJogo = false
    } else if(pontuacaoMaquina ==2){
        alert('A máquina ganhou o jogo!')
        emJogo = false
    } else {
    emJogo = true
    }
   
    console.log("Escolha da Máquina:", escolhaMaquina)
}

