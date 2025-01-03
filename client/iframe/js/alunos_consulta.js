const aluno = JSON.parse(localStorage.getItem('aluno_info'));

console.log(aluno);

const nome = aluno.nome;
const turma = aluno.turma;
const endereco = aluno.endereco;
const numeroResponsaveis = aluno.tel;
const livro_ID = Number(aluno.livro_ID);

const h1Nome = document.querySelector('#h1-consulta');
const divTurma = document.querySelector('#turma');
const divEndereco = document.querySelector('#endereço');
const divNumeroResponsaveis = document.querySelector('#numero-dos-responsaveis');

h1Nome.innerHTML = 'Nome: ' + nome;
divTurma.innerHTML = 'Turma: ' + turma;
divEndereco.innerHTML = 'Endereço: ' + endereco;
divNumeroResponsaveis.innerHTML = 'Numero dos responsaveis: ' + numeroResponsaveis;


if (livro_ID) {
    window.onload = async () => {
        try {
            const response = await fetch(`http://localhost:8080/livros?livro_ID=${livro_ID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            const livro = data.livro;

            const divLivro = document.querySelector('#livro-emprestado');

            const h1Nome = document.createElement('p');
            const h2Autor = document.createElement('p');
            const pSinopse = document.createElement('p');

            const nome = livro.nome;
            const autor = livro.autor;
            const sinopse = livro.sinopse;

            h1Nome.textContent = nome;
            h2Autor.textContent = autor;
            pSinopse.textContent = sinopse;

            divLivro.appendChild(h1Nome);
            divLivro.appendChild(h2Autor);
            divLivro.appendChild(pSinopse);
        } catch(err) {
            alert(err);
            console.log(err);
        }
    };
}

window.addEventListener('unload', () => {
    localStorage.removeItem('aluno_info');
});