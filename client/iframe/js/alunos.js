const gerarAlunos = alunos => {
    alunos.forEach(element => {
        const main = document.querySelector('main');
        const div = document.createElement('div');
        const div_id = document.createElement('div');
        const icon = document.createElement('ion-icon');
        const p_id = document.createElement('p');
        const p_div = document.createElement('p');
        const link = document.createElement('a');
        const btn = document.createElement('button');
        
        let id = document.createTextNode(element.id);
        let divText = document.createTextNode(element.nome);
        let btnText = document.createTextNode('ver perfil');

        div.setAttribute('class', 'aluno');
        div_id.setAttribute('class', 'aluno-id');
        icon.setAttribute('name', 'person');
        link.setAttribute('href', 'alunos_consulta.html');

        main.appendChild(div);
        div.appendChild(div_id);
        div_id.appendChild(icon);
        div_id.appendChild(p_id);
        p_id.appendChild(id);
        div.appendChild(p_div);
        p_div.appendChild(divText);
        div.appendChild(link);
        link.appendChild(btn);
        btn.appendChild(btnText);

        btn.addEventListener("click", () => localStorage.setItem('aluno_info', JSON.stringify(element)));
    });
}
window.onload = async () => {

    document.querySelectorAll('.aluno').forEach(element => element.remove());

    try {
        const response = await fetch('http://localhost:8080/alunos', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        const alunos = data.alunos;

        gerarAlunos(alunos);
    } catch(err) {
        alert(err);
        console.log(err);
    }
}

const searchBar = document.querySelector('#search-input');

searchBar.addEventListener('input', async () => {
    const search = searchBar.value; 

    document.querySelectorAll('.aluno').forEach(element => element.remove());

    try {
        const response = await fetch(`http://localhost:8080/alunos?search=${search}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        const alunos = data.alunos;

        gerarAlunos(alunos);
    } catch(err) {
        alert(err);
        console.log(err);
    }
});