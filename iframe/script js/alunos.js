for (let i = 1; i <= 1500; i++) {
    const main = document.querySelector('main');
    const div = document.createElement('div');
    const div_id = document.createElement('div');
    const icon = document.createElement('ion-icon');
    const p_id = document.createElement('p');
    const p_div = document.createElement('p');
    const link = document.createElement('a');
    const btn = document.createElement('button');
    
    let id = document.createTextNode(i);
    let divText = document.createTextNode('Aluno');
    let btnText = document.createTextNode('ver perfil');

    div.setAttribute('class', 'livro');
    div_id.setAttribute('class', 'livro_id');
    icon.setAttribute('name', 'person');

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
}

//sera implementadoo posteriormente com nodejs