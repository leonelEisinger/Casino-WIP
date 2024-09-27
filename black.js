$(document).ready(function() {
  // Variáveis do jogo
  let playerHand = [];
  let dealerHand = [];
  let playerScore = 0;
  let dealerScore = 0;
  let gameOver = false;

  // Função para iniciar o jogo
  function startGame() {
    playerHand = [];
    dealerHand = [];
    playerScore = 0;
    dealerScore = 0;
    gameOver = false;

    // Exibe as áreas de mão e controle
    $('#player-hand').removeClass('d-none');
    $('#dealer-hand').removeClass('d-none');
    $('#game-controls').removeClass('d-none');
    $('#start-game').addClass('d-none'); // Esconde o botão de início

    // Limpa as cartas e as pontuações
    $('#player-cards').html('');
    $('#dealer-cards').html('');
    $('#player-score').text('Score: 0');
    $('#dealer-score').text('Score: 0');
    $('#game-result').text('');

    // Distribui duas cartas ao jogador e uma ao dealer
    playerHand.push(drawCard(), drawCard());
    dealerHand.push(drawCard());

    // Atualiza o display das mãos e pontuações
    updateDisplay();
  }

  // Função para desenhar uma carta
  function drawCard() {
    return Math.floor(Math.random() * 11) + 1; // Valor simples entre 1 e 11
  }

  // Atualiza o display das cartas e pontuação
  function updateDisplay() {
    $('#player-cards').html(playerHand.join(' '));
    $('#dealer-cards').html(dealerHand.join(' '));
    playerScore = calculateScore(playerHand);
    dealerScore = calculateScore(dealerHand);
    $('#player-score').text('Score: ' + playerScore);
    $('#dealer-score').text('Score: ' + dealerScore);
  }

  // Função para calcular a pontuação
  function calculateScore(hand) {
    return hand.reduce((acc, card) => acc + card, 0);
  }

  // Função para encerrar o jogo
  function endGame(result) {
    gameOver = true;
    $('#game-result').text(result);
    $('#restart').removeClass('d-none');
    $('#hit, #stand, #double-down, #split, #surrender').prop('disabled', true);
  }

  // Eventos dos botões
  $('#hit').on('click', function() {
    if (!gameOver) {
      playerHand.push(drawCard());
      updateDisplay();
      if (playerScore > 21) {
        endGame('You Busted!');
      }
    }
  });

  $('#stand').on('click', function() {
    if (!gameOver) {
      // Dealer joga até 17 ou mais
      while (dealerScore < 17) {
        dealerHand.push(drawCard());
        updateDisplay();
      }
      if (dealerScore > 21) {
        endGame('Dealer Busted! You Win!');
      } else {
        if (playerScore > dealerScore) {
          endGame('You Win!');
        } else if (playerScore < dealerScore) {
          endGame('Dealer Wins!');
        } else {
          endGame('It\'s a Draw!');
        }
      }
    }
  });

  $('#double-down').on('click', function() {
    if (!gameOver && playerHand.length === 2) {
      playerHand.push(drawCard());
      updateDisplay();
      $('#hit, #stand').prop('disabled', true); // Desabilita outras ações
      setTimeout(() => $('#stand').trigger('click'), 500); // Força o jogador a "stand"
    }
  });

  $('#split').on('click', function() {
    if (!gameOver && playerHand.length === 2 && playerHand[0] === playerHand[1]) {
      // Lógica para Split
      $('#game-result').text('You split your hand! Handle each hand separately.');
    }
  });

  $('#surrender').on('click', function() {
    if (!gameOver) {
      endGame('You Surrendered.');
    }
  });

  // Reiniciar o jogo
  $('#restart').on('click', function() {
    $('#hit, #stand, #double-down, #split, #surrender').prop('disabled', false);
    $(this).addClass('d-none');
    startGame();
  });

  // Evento para iniciar o jogo
  $('#start-btn').on('click', function() {
    startGame();
  });
});
