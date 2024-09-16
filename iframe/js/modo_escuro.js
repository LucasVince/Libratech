window.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.querySelector('#checkboxInput');

    const tagMain = document.querySelector('main');
    const tagH1 = document.querySelector('h1');
    const configsDiv = document.querySelector('#configs div');
    
    const divLivros = document.querySelectorAll('.livro');

    const mudarParaModoEscuro = () => {
        if (tagMain) tagMain.style.backgroundColor = '#161718';
        if (tagH1) {
            tagH1.style.backgroundColor = '#474a4d';
            tagH1.style.color = 'white';
        }
        if (configsDiv) {
            configsDiv.style.backgroundColor = '#474a4d';
            configsDiv.style.color = 'white';
        }
        if (divLivros) {
            console.log(divLivros)
            divLivros.forEach(el => divLivros[el].style.backgroundColor = '#474a4d');
        }
    }

    const mudarParaModoClaro = () => {
        if (tagMain) tagMain.style.backgroundColor = '#a7a7a1';
        if (tagH1) {
            tagH1.style.backgroundColor = '#e6e6e1';
            tagH1.style.color = 'black';
        }
        if (configsDiv) {
            configsDiv.style.backgroundColor = '#e6e6e1';
            configsDiv.style.color = 'black';
        }
        if (divLivros) {
            divLivros.forEach(el => divLivros[el].style.backgroundColor = '#dadad5');
        }
    }

    const switchChangeDelay = () => {
        switchInput.disabled = true;
            setTimeout(() =>{
                switchInput.disabled = false;
            }, 500);
    }

    const funcModoEscuro = () => {
        if (switchInput.checked) {
            switchChangeDelay();
            mudarParaModoEscuro();

            localStorage.setItem('modoEscuro', 'true');
        } else {
            switchChangeDelay();
            mudarParaModoClaro();

            localStorage.setItem('modoEscuro', 'false');
        }
    }

        const estadoModoEscuro = localStorage.getItem('modoEscuro');

        if (estadoModoEscuro === 'true') {
            if (switchInput) {
                switchInput.checked = true;
            }
            mudarParaModoEscuro();
        } else {
            if (switchInput) {
                switchInput.checked = false;
            }
            mudarParaModoClaro();
        }
        if (switchInput) {
            switchInput.addEventListener('change', funcModoEscuro);
        }
})