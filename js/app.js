function alterarStatus(id) {
    let jogoAlugado = document.getElementById(`game-${id}`);
    let imgAlugado = jogoAlugado.querySelector('.dashboard__item__img')
    let botaoRetornar = jogoAlugado.querySelector('.dashboard__item__button')
    let nomeDoJogo = jogoAlugado.querySelector('.dashboard__item__name')
    
    if (imgAlugado.classList.contains('dashboard__item__img--rented')) {

        // Confirmação se o usuário que devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeDoJogo.textContent}? `)) {
           
        }
        imgAlugado.classList.remove('dashboard__item__img--rented');
        botaoRetornar.classList.contains('dashboard__item__button--return');
        botaoRetornar.classList.remove('dashboard__item__button--return');
        botaoRetornar.textContent = 'Alugar';
        
    } else {
        // Mensagem ao alugar o jogo
        alert(`Esperamos que se divirta com o jogo ${nomeDoJogo.textContent}!`)
        imgAlugado.classList.add('dashboard__item__img--rented');
        botaoRetornar.classList.add('dashboard__item__button--return')
        botaoRetornar.textContent = 'Devolver';
    }

}