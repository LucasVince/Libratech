const livrosForm = document.querySelector('#from-cadastro');

const nomeInput = document.querySelector('#nome');
const autorInput = document.querySelector('#autor');
const classificacaoInput = document.querySelector('#classificacao');
const generoInput = document.querySelector('#genero');

const cadastrarLivro = async event => {
    event.preventDefault();

    const nome = nomeInput.value;
    const autor = autorInput.value;
    const classificacao = classificacaoInput.value;
    const genero = generoInput.value;

    try {
        const response = await fetch('http://localhost:8080/livros', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({nome, autor, classificacao, genero})
        });

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message);
        }

        alert('livro cadastrado com sucesso!!');

        nomeInput.value = '';
        autorInput.value = '';
        classificacaoInput.value = '';
        generoInput.value = '';
    } catch(err) {
        alert(err.message);
        console.error(err.message);
    }
}

livrosForm.addEventListener('submit', cadastrarLivro)