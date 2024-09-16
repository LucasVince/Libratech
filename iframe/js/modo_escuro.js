window.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.querySelector('#checkboxInput');

    const tagMainConfig = document.querySelector('#mainConfig');
    const tagH1 = document.querySelector('h1');
    const configsDiv = document.querySelector('#configs div');
    
    const TagBodyLivro = document.querySelector('#bodyLivro');
    const divLivros = document.querySelectorAll('.livro');
    const divSearch = document.querySelector('#search-div');

    const mudarParaModoEscuro = () => {
        if (tagMainConfig) tagMainConfig.style.backgroundColor = '#161718';
        if (tagH1) {
            tagH1.style.backgroundColor = '#474a4d';
            tagH1.style.color = 'white';
        }
        if (configsDiv) {
            configsDiv.style.backgroundColor = '#474a4d';
            configsDiv.style.color = 'white';
        }

        if (TagBodyLivro) {
            TagBodyLivro.style.backgroundColor = '#161718';
        }
        if (divLivros) {
            console.log(divLivros)
            divLivros.forEach(el => el.style.boxShadow = '0 2px 0 #474a4d');
            divLivros.forEach(el => el.style.color = 'white');
        }
        if (divSearch) {
            divSearch.style.boxShadow = '0 2px 0 #474a4d';
        }
    }

    const mudarParaModoClaro = () => {
        if (tagMainConfig) tagMainConfig.style.backgroundColor = '#a7a7a1';
        if (tagH1) {
            tagH1.style.backgroundColor = '#dadad5';
            tagH1.style.color = 'black';
        }
        if (configsDiv) {
            configsDiv.style.backgroundColor = '#dadad5';
            configsDiv.style.color = 'black';
        }

        if (TagBodyLivro) {
            TagBodyLivro.style.backgroundColor = '#dadad5';
        }
        if (divLivros) {
            divLivros.forEach(el => el.style.backgroundColor = '0 2px 0 #acacac');
            divLivros.forEach(el => el.style.color = 'black');
        }
        if (divSearch) {
            divSearch.style.boxShadow = '0 2px 0 #acacac';
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