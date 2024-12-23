const selectAluno = document.querySelector('#aluno');
const selectLivro = document.querySelector('#livro');

const form = document.querySelector('#link-aluno-livro-form');
window.onload = async () => {
    try {
        const responseAlunos = await fetch('http://localhost:8080/alunos', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const responseLivros = await fetch('http://localhost:8080/livros', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        const dataAlunos = await responseAlunos.json();
        const dataLivros = await responseLivros.json();

        if (!responseAlunos.ok || !responseLivros.ok) {
            throw new Error(dataAlunos.message + dataLivros.message);
        }

        const alunos = dataAlunos.alunos;
        const livros = dataLivros.livros;

        alunos.forEach(element => {
            const option = document.createElement('option');       
            option.value = element.id;
            option.textContent = element.nome;
            selectAluno.appendChild(option);
        });

        livros.forEach(element => {
            const option = document.createElement('option');
            option.value = element.id;
            option.textContent = element.nome;
            selectLivro.appendChild(option);
        });
    } catch(err) {
        alert(err.message);
        console.error(err.message);
    }
};

form.addEventListener('submit', async event => {
    event.preventDefault();

    const aluno = selectAluno.value;
    const livro = selectLivro.value;

    try {
        const response = await fetch('http://localhost:8080/alunos', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ aluno, livro })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        selectAluno.value = '';
        selectLivro.value = '';
    } catch(err) {
        alert(err.message);
        console.log(err.message);
    }
});
