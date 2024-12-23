const livrosForm = document.querySelector('#from-cadastro');

const nomeInput = document.querySelector('#nome');
const autorInput = document.querySelector('#autor');
const classificacaoInput = document.querySelector('#classificacao');
const generoInput = document.querySelector('#genero');
const sinopseInput = document.querySelector('#sinopse');

const cadastrarLivro = async event => {
    event.preventDefault();

    const nome = nomeInput.value;
    const autor = autorInput.value;
    const classificacao = classificacaoInput.value;
    const genero = generoInput.value;
    const sinopse = sinopseInput.value;
    const emprestado = false;

    try {
        const response = await fetch('http://localhost:8080/livros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({nome, autor, classificacao, genero, sinopse, emprestado})
        });

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message);
        }

        nomeInput.value = '';
        autorInput.value = '';
        classificacaoInput.value = '';
        generoInput.value = '';
        sinopseInput.value = '';
    } catch(err) {
        alert(err.message);
        console.error(err.message);
    }
}

livrosForm.addEventListener('submit', cadastrarLivro)