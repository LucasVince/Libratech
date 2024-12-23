const livro = JSON.parse(localStorage.getItem('livro_info'));

const nome = livro.nome;
const autor = livro.autor;
const classificacao = livro.classificacao_indicativa;
const sinopse = livro.sinopse;

const divNome = document.querySelector('#nome');
const divAutor = document.querySelector('#autor');
const divClassificacao = document.querySelector('#classificacao');
const pSinopse = document.querySelector('#sinopse p');

divNome.innerHTML = 'Nome: ' + nome;
divAutor.innerHTML = 'Autor: ' + autor;
divClassificacao.innerHTML = 'Classificação: ' + classificacao;
pSinopse.innerHTML = sinopse;

window.addEventListener('unload', () => {
    localStorage.removeItem('livro_info');
});