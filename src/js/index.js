/* Objetivo 1- Quando o usuario clicar no botão de mostrar mais deve abriri os projetos
que estãp escondidos no html. 

    Passo 1- pegar o botao mostrar mais no JS pra pode verificar quando o usuario
    clicar em cima dele

    Passo 2 - indentificar o clique no botao

    Passo 3 - adcionar a classe "ativo" nos projetros escondidos

Objetivo 2 -     

*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo) ');


botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 -adcionar a classe "ativo nos projetos escondidos"
    mostrarMaisProjetos();
    
    // Objetivo 2 - esconder o botão de mostrar mais
    // Passo 1 - pegar o botão e esconder ele

    botaoMostrarProjetos.classList.add("remover");
});

function mostrarMaisProjetos() {
    projetosInativos.forEach((projetosInativos) => {
        projetosInativos.classList.add('ativo');

    });
}
