function alterarStatus(id) {
    let jogoAlugado = document.getElementById(`game-${id}`);
    let imgAlugado = jogoAlugado.querySelector('.dashboard__item__img')
    let botaoRetornar = jogoAlugado.querySelector('.dashboard__item__button')
    
    if (imgAlugado.classList.contains('dashboard__item__img--rented')) {
        imgAlugado.classList.remove('dashboard__item__img--rented');
        botaoRetornar.classList.contains('dashboard__item__button--return');
        botaoRetornar.classList.remove('dashboard__item__button--return');
        botaoRetornar.textContent = 'Alugar';
        
    } else {
        imgAlugado.classList.add('dashboard__item__img--rented');
        botaoRetornar.classList.add('dashboard__item__button--return')
        botaoRetornar.textContent = 'Devolver';
    }

}