window.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.querySelector('#checkboxInput');
    const tagMain = document.querySelector('main');
    const tagH1 = document.querySelector('h1');
    const divsConfig = document.querySelector('#configs div');
    const tagBody = document.querySelector('body');

    const mudarParaModoEscuro = () => {
        if (tagMain) tagMain.style.backgroundColor = '#2e2e29';
        if (tagH1) {
            tagH1.style.backgroundColor = '#5a5a51';
            tagH1.style.color = 'white';
        }
        if (divsConfig) {
            divsConfig.style.backgroundColor = '#5a5a51';
            divsConfig.style.color = 'white';
        }
        if (tagBody) tagBody.style.backgroundColor = '#2e2e29';
    }
    
    const mudarParaModoClaro = () => {
        if (tagMain) tagMain.style.backgroundColor = '#a9a9a4';
        if (tagH1) {
            tagH1.style.backgroundColor = '#e6e6e1';
            tagH1.style.color = 'black';
        }
        if (divsConfig) {
            divsConfig.style.backgroundColor = '#e6e6e1';
            divsConfig.style.color = 'black';
        }

        if (tagBody) tagBody.style.backgroundColor = '#a9a9a4';
    }

    const switchDelay = () => {
        switchInput.disabled = true;
        setTimeout(() => {
            switchInput.disabled = false;
        }, 500);
    }

    const modoEscuro = () => {
        if (switchInput.checked) {
            switchDelay();
            mudarParaModoEscuro();
            localStorage.setItem('estadoModoEscuro', 'true');
        } else {
            switchDelay();
            mudarParaModoClaro();
            localStorage.setItem('estadoModoEscuro', 'false');
        }
    }

    if (switchInput) {
        const modoEscuroSalvo = localStorage.getItem('estadoModoEscuro');

        if (modoEscuroSalvo === 'true') {
            switchInput.checked = true;
            mudarParaModoEscuro();
        } else {
            switchInput.checked = false;
            mudarParaModoClaro();
        }
        switchInput.addEventListener('change', modoEscuro);
    }
});