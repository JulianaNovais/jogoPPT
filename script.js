function iniciarJogo(emJogo) {
    let jogando = emJogo
    let pontuacaoJogador = 0
    let pontuacaoMaquina = 0
  
    function atualizarContador(ganhador) {  
      let contJogador = document.getElementById('contJogador')
      let contAdver = document.getElementById('contAdver')
      
      if (ganhador == contJogador) {
        pontuacaoJogador = pontuacaoJogador + 1
        alert('Parabéns, você ganhou a rodada!')
      } else if (ganhador == contAdver) {
        pontuacaoMaquina = pontuacaoMaquina + 1
        alert('A máquina ganhou a rodada!')
      }
  
      contJogador.innerHTML = pontuacaoJogador;
      contAdver.innerHTML = pontuacaoMaquina;
  
      // verifica ganhador do jogo
      if (pontuacaoJogador >= 2) {
        alert('Você ganhou o jogo!')
        jogando = false    
      }
      if (pontuacaoMaquina >= 2) {
        alert('A máquina ganhou o jogo!')
        jogando = false      
      } 
    }
  
    while (jogando) {
      let escolhaJogador = parseInt(prompt('Escolha: 1-Pedra, 2-Papel, 3-Tesoura'))
  
      if (escolhaJogador == 1 || escolhaJogador == 2 || escolhaJogador == 3) {
        let escolhaMaquina = Math.floor(Math.random() * (3 - 1 + 1) + 1)  
        switch (escolhaJogador) {
          case 1:
            if (escolhaMaquina == 2) {
              atualizarContador(contAdver)
            } else if (escolhaMaquina == 3) {
              atualizarContador(contJogador)
            } else {
              alert('Empate!')
            }
            break
          case 2:
            if (escolhaMaquina == 3) {
              atualizarContador(contAdver)
            } else if (escolhaMaquina == 1) {
              atualizarContador(contJogador)
            } else {
              alert('Empate!')
            }
            break
          case 3:
            if (escolhaMaquina == 1) {
              atualizarContador(contAdver)
            } else if (escolhaMaquina == 2) {
              atualizarContador(contJogador)
            } else {
              alert('Empate!')
            }
            break
          }
        
      } else {
        alert('Opção inválida, tente novamente!')
      }
    }
  }
  