const alunosForm = document.querySelector('#from-cadastro');

const nomeInput = document.querySelector('#nome');
const idadeInput = document.querySelector('#idade');
const turmaInput = document.querySelector('#turma');
const enderecoInput = document.querySelector('#endereco');
const numeroResponsaveisInput = document.querySelector('#responsaveis');

const cadastrarAluno = async event => {
    event.preventDefault();

    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const turma = turmaInput.value.toUpperCase();
    const endereco = enderecoInput.value;
    const numeroResponsaveis = numeroResponsaveisInput.value;

    try {
        const response = await fetch('http://localhost:8080/alunos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify( {nome, idade, turma, endereco, numeroResponsaveis} )
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        console.log(data.message);
        console.log(data.aluno);

        nomeInput.value = '';
        idadeInput.value = '';
        turmaInput.value = '';
        enderecoInput.value = '';
        numeroResponsaveisInput.value = '';
    } catch (err) {
        alert(err.message);
        console.log(err.message);
    }
}

alunosForm.addEventListener('submit', cadastrarAluno);