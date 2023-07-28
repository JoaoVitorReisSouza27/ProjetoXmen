///Passo 1-pegar os ersonagens no JS para poder verificar quando o usurario passar o mouse em cima de um deles


const personagens = document.querySelectorAll('.personagem');
 //Passo 2 - Adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () =>{
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        personagem.classList.add('selecionado');

        //Passo - 3 Verificar se ja existe um personagem, se sim, remover a seleção

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        //Obejtive 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //Passo 1 - Pergar o elemento do personagem grande para adicionar as informações nele

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        //Passo 2 - Alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./SRC/card-${idPersonagem}.png`;

        //Passo 3 -  Alterar o nome do personagem grande

        const nomePersonagem = document.getElementById ('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //Passo 4 - Alterar a descricao do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')


        
    })
})

