HTML (index.html):

O arquivo HTML define a estrutura da página da web.
Ele inclui um tabuleiro de jogo (game-board) que contém imagens para nuvens, o personagem dinossauro (dino) e um obstáculo de cacto (cacto).
Os elementos timer e record exibem o tempo decorrido e a pontuação mais alta alcançada, respectivamente.

CSS (style.css):

O arquivo CSS contém estilos para formatar e posicionar os elementos na página.
Ele define estilos para o tabuleiro de jogo, nuvens, cactos, dinossauro, temporizador e elementos de registro.
Também há animações de keyframes (pipe-animation, jump, clouds-animation) para animar o movimento dos cactos, a ação de salto do dinossauro e o movimento das nuvens.

JavaScript (script.js):

O arquivo JavaScript contém a lógica do jogo e a interação.
Ele seleciona elementos relevantes do DOM, como o dinossauro (dino), cacto (cacto), temporizador (timerElement) e elementos de registro (recordElement).
Inicializa variáveis para acompanhar o tempo, o intervalo do temporizador e a pontuação mais alta (recuperada do armazenamento local).
A mecânica do jogo inclui uma função jump para fazer o dinossauro pular, uma função updateTimer para incrementar o temporizador e uma função stopGame para interromper o jogo e exibir a imagem assustada do dinossauro.
Há um loop que verifica continuamente as colisões entre o cacto e o dinossauro para determinar se o jogo deve parar.
O ouvinte de evento keydown aciona a função jump quando uma tecla é pressionada.
Uma função setInterval atualiza o temporizador a cada segundo e armazena a pontuação mais alta no armazenamento local quando necessário.
Também há um ouvinte de evento para um botão de reinício para redefinir o temporizador e reiniciar o jogo.
