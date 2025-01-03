const gerarAlunos = alunos => {
    alunos.forEach(element => {
        const main = document.querySelector('main');
        const div = document.createElement('div');
        const div_id = document.createElement('div');
        const icon = document.createElement('ion-icon');
        const p_id = document.createElement('p');
        const p_div = document.createElement('p');
        const btn = document.createElement('button');
        
        let id = document.createTextNode(element.id);
        let divText = document.createTextNode(element.nome);
        let btnText = document.createTextNode('bloquear');

        div.setAttribute('class', 'aluno');
        div_id.setAttribute('class', 'aluno-id');
        icon.setAttribute('name', 'person');

        main.appendChild(div);
        div.appendChild(div_id);
        div_id.appendChild(icon);
        div_id.appendChild(p_id);
        p_id.appendChild(id);
        div.appendChild(p_div);
        p_div.appendChild(divText);
        div.appendChild(btn);
        btn.appendChild(btnText);

        btn.addEventListener("click", async () => {
            const id = element.id;

            try {
                const response = await fetch('http://localhost:8080/alunos', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message);
                }

                console.log(data.aluno);
            } catch (err) {
                alert(err);
                console.log(err);
            }
        });
    });
}

window.onload = async () => {
    try {
        const response = await fetch('http://localhost:8080/alunos', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' } 
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        const devendoLivro = data.devendoLivro;

        gerarAlunos(devendoLivro);
    } catch(err) {
        alert(err);
        console.log(err);
    }
};

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

        const devendoLivro = data.devendoLivro;

        gerarAlunos(devendoLivro);
    } catch(err) {
        alert(err);
        console.log(err);
    }
});