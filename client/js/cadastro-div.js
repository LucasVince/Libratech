const btnCadastro = document.querySelector('#cadastros');
const cadastroDiv = document.querySelector('#cadastro-div');

cadastroDiv.style.opacity = '0';
cadastroDiv.style.pointerEvents = 'none';

btnCadastro.addEventListener('click', () => {
    if (cadastroDiv.style.opacity == '0') {
        cadastroDiv.style.opacity = '100%';
        cadastroDiv.style.pointerEvents = 'all';
    } else {
        cadastroDiv.style.opacity = '0';
        cadastroDiv.style.pointerEvents = 'none';
    }
    cadastroDiv.addEventListener('mouseleave', () => {
        if (cadastroDiv.style.opacity == '1') {
            cadastroDiv.style.opacity = '0';
            cadastroDiv.style.pointerEvents = 'none';
        }
    });
});