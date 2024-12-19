// window.addEventListener('DOMContentLoaded', () => {
//     const switchInput = document.querySelector('#checkboxInput');

//     const tagMainConfig = document.querySelector('#mainConfig');
//     const tagH1 = document.querySelector('h1');
//     const configsDiv = document.querySelector('#configs div');
    
//     const Body = document.querySelector('body');
//     const divLivros = document.querySelectorAll('.livro');
//     const divAluno = document.querySelectorAll('.aluno');
//     const divSearch = document.querySelector('#search-div');

//     const consultaDiv = document.querySelectorAll('.div-consulta');

//     const mudarParaModoEscuro = () => {
//         if (tagMainConfig) {
//             tagMainConfig.style.backgroundColor = '#161718';
//             tagMainConfig.style.transition = '0.25s';
//         }
//         if (tagH1) {
//             tagH1.style.backgroundColor = '#474a4d';
//             tagH1.style.color = 'white';
//             tagH1.style.transition = '0.25s';
//         }
//         if (configsDiv) {
//             configsDiv.style.backgroundColor = '#474a4d';
//             configsDiv.style.color = 'white';
//             configsDiv.style.transition = '0.25s';
//         }

//         if (Body) {
//             Body.style.backgroundColor = '#161718';
//         }
//         if (divLivros) {
//             divLivros.forEach(el => el.style.boxShadow = '0 2px 0 #474a4d');
//             divLivros.forEach(el => el.style.color = '#bbb');
//         }
//         if (divAluno) {
//             divAluno.forEach(el => el.style.boxShadow = '0 2px 0 #474a4d');
//             divAluno.forEach(el => el.style.color = '#bbb');
//         }
//         if (divSearch) {
//             divSearch.style.boxShadow = '0 2px 0 #474a4d';
//         }
//         if (consultaDiv) {
//             consultaDiv.forEach(el => el.style.backgroundColor = '#474a4d');
//             consultaDiv.forEach(el => el.style.color = 'white');
//         }
//     }

//     const mudarParaModoClaro = () => {
//         if (tagMainConfig) {
//             tagMainConfig.style.backgroundColor = '#a7a7a1';
//             tagMainConfig.style.transition = '0.25s';
//         }
//         if (tagH1) {
//             tagH1.style.backgroundColor = '#dadad5';
//             tagH1.style.color = 'black';
//             tagH1.style.transition = '0.25s';
//         }
//         if (configsDiv) {
//             configsDiv.style.backgroundColor = '#dadad5';
//             configsDiv.style.color = 'black';
//             configsDiv.style.transition = '0.25s';
//         }

//         if (TagBodyLivroAluno) {
//             TagBodyLivroAluno.style.backgroundColor = '#dadad5';
//         }
//         if (divLivros) {
//             divLivros.forEach(el => el.style.backgroundColor = '0 2px 0 #acacac');
//             divLivros.forEach(el => el.style.color = 'black');
//         }
//         if (divAluno) {
//             divAluno.forEach(el => el.style.backgroundColor = '0 2px 0 #acacac');
//             divAluno.forEach(el => el.style.color = 'black');
//         }
//         if (divSearch) {
//             divSearch.style.boxShadow = '0 2px 0 #acacac';
//         }
//         if (consultaDiv) {
//             consultaDiv.forEach(el => el.style.backgroundColor = '#dadad5');
//             consultaDiv.forEach(el => el.style.color = 'black');
//         }
//     }

//     const switchChangeDelay = () => {
//         switchInput.disabled = true;
//             setTimeout(() =>{
//                 switchInput.disabled = false;
//             }, 500);
//     }

//     const funcModoEscuro = () => {
//         if (switchInput.checked) {
//             switchChangeDelay();
//             mudarParaModoEscuro();

//             localStorage.setItem('modoEscuro', 'true');
//         } else {
//             switchChangeDelay();
//             mudarParaModoClaro();

//             localStorage.setItem('modoEscuro', 'false');
//         }
//     }

//         const estadoModoEscuro = localStorage.getItem('modoEscuro');

//         if (estadoModoEscuro === 'true') {
//             if (switchInput) {
//                 switchInput.checked = true;
//             }
//             mudarParaModoEscuro();
//         } else {
//             if (switchInput) {
//                 switchInput.checked = false;
//             }
//             mudarParaModoClaro();
//         }
//         if (switchInput) {
//             switchInput.addEventListener('change', funcModoEscuro);
//         }
// })