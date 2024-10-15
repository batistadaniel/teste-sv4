// function selecionar(destino, selectId) {
//     const selectElement = document.getElementById(selectId);
    
//     const opcaoSelecionada = selectElement.options[selectElement.selectedIndex].text;

//     if (opcaoSelecionada !== 'Selecione um Administrador') {
//         const destinoTitulo = document.querySelector(`#${destino} .ttl`);
//         destinoTitulo.textContent = (destino === 'editar-administrador' ? 'Editando ' : 'Excluindo ') + opcaoSelecionada;

//         navigate(destino);
//     }
// }



document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();

    // // Capturar os valores dos inputs
    // const email = document.getElementById('email').value;
    // const senha = document.getElementById('senha').value;
    
    // // Validar os dados de entrada
    // if (!email ||!senha) {
    //     alert('Preencha todos os campos!');
    //     return;
    // }
    
    // // Simular o login
    // // Simular a chamada à API para verificar os dados de entrada
    // setTimeout(function () {
    //     if (email === 'admin@senac.com' && senha === '123456') {
    //         alert('Login efetuado com sucesso!');
    //     } else {
    //         alert('E-mail ou senha inválidos!');
    //     }
    // }, 1000);

    // // Limpar os campos de entrada
    // document.getElementById('email').value = '';
    // document.getElementById('senha').value = '';

    // // Limpar o campo de senha após 3 segundos para demonstrar a animação de desaparecimento
    // setTimeout(function () {
    //     document.getElementById('senha').value = '';
    // }, 3000);

    // // Limpar a sessão
    // sessionStorage.removeItem('administrador');

    // // Desabilitar o botão de login
    // document.getElementById('login').disabled = true;

    // // Mostrar o botão de logout
    // document.getElementById('logout').style.display = 'block';

    // // Mostrar o botão de deslogar
    // document.getElementById('deslogar').style.display = 'block';

    window.location.href = 'home.html';

    
} )
function selecionar(destino, selectId, entidade) {
    const selectElement = document.getElementById(selectId);
    
    // Captura o texto da opção selecionada
    const opcaoSelecionada = selectElement.options[selectElement.selectedIndex].text;
    
    // Verifica se foi selecionada uma opção válida
    if (!opcaoSelecionada.includes('Selecione')) {
        const destinoTitulo = document.querySelector(`#${destino} .ttl`);

        // Define o texto baseado na ação (editar/excluir) e na entidade (administrador/funcionário/cliente)
        const acao = destino.includes('editar') ? 'Editando' : 'Excluindo';
        destinoTitulo.innerHTML = `${acao} ${entidade}: <br>  ${opcaoSelecionada}`;
        destinoTitulo.style.width = "300px";


        // Navega para a página de destino
        navigate(destino);
    }
}

function selecionarAgendamentoPro(botao, nomeProfissional, dataServico, horarioServico, servicoRealizado, formaPagamento) {
    // Capturar o texto do botão clicado
    const nomeAgendamento = botao.innerText;

    // Atualizar o título da descrição do agendamento com o texto do botão
    document.querySelector('#descricao-agendamento .ttl').innerHTML = `Descrição do agendamento: <br> ${nomeAgendamento}`;
    document.querySelector('#descricao-agendamento .ttl').style.width = '300px'

    // Atualizar os detalhes do agendamento
    document.getElementById('nome-profissional').innerText = 'Nome do profissional: ' + nomeProfissional;
    document.getElementById('data-servico').innerText = 'Data do serviço: ' + dataServico;
    document.getElementById('horario-servico').innerText = 'Horário do serviço: ' + horarioServico;
    document.getElementById('servico-realizado').innerText = 'Serviço a ser realizado: ' + servicoRealizado;
    document.getElementById('forma-pagamento').innerText = 'Forma de pagamento: ' + formaPagamento;

    // Esconder a área de visualização de agendamentos
    document.getElementById('visualizar-agendamento').classList.add('hidden');
    
    // Mostrar a área de descrição do agendamento
    document.getElementById('descricao-agendamento').classList.remove('hidden');
}

function selecionarAgendamentoCli(botao, nomeCliente, dataServico, horarioServico, servicoRealizado, formaPagamento) {
    // Capturar o texto do botão clicado
    const nomeAgendamento = botao.innerText;

    // Atualizar o título da descrição do agendamento com o texto do botão
    document.querySelector('#descricao-agendamento .ttl').innerHTML = `Descrição do agendamento: <br> ${nomeAgendamento}`;
    document.querySelector('#descricao-agendamento .ttl').style.width = '300px'

    // Atualizar os detalhes do agendamento
    document.getElementById('nome-cliente').innerText = 'Nome do cliente: ' + nomeCliente;
    document.getElementById('data-servico').innerText = 'Data do serviço: ' + dataServico;
    document.getElementById('horario-servico').innerText = 'Horário do serviço: ' + horarioServico;
    document.getElementById('servico-realizado').innerText = 'Serviço a ser realizado: ' + servicoRealizado;
    document.getElementById('forma-pagamento').innerText = 'Forma de pagamento: ' + formaPagamento;

    // Esconder a área de visualização de agendamentos
    document.getElementById('visualizar-agendamento').classList.add('hidden');
    
    // Mostrar a área de descrição do agendamento
    document.getElementById('descricao-agendamento').classList.remove('hidden');
}



// Função para mudar as opções e controlar o histórico
function navigate(id) {
    // Ocultar todos os menus
    document.querySelectorAll('main').forEach(function (main) {
        main.classList.add('hidden');
    });


    /* 
    
        O método querySelectorAll é usado para selecionar todos os elementos <main> do documento HTML.
    
        O método forEach é utilizado para iterar sobre cada elemento (neste caso, cada <main> da NodeList).
        Para cada elemento <main>, a função anônima passada como argumento para o forEach é executada, recebendo o elemento como o parâmetro main.
    
        Dentro da função, o método classList.add('hidden') adiciona a classe hidden a cada elemento <main> para ocultar.  
    
    */

    // Exibir o menu clicado
    if (id) {
        document.getElementById(id).classList.remove('hidden');
    }

    /* 
    
        Essa parte usa o método getElementById para encontrar o elemento no documento que tenha o id correspondente ao valor passado para a função.
        O id é o identificador único do elemento <main> que você quer mostrar.

        .classList.remove('hidden'): Essa linha remove a classe hidden do elemento que foi encontrado com getElementById.
        Remover a classe hidden faz com que o elemento volte a ser exibido, já que ele não terá mais a classe que estava ocultando-o (display: none)
    
    */

    // Alterar o texto do cabeçalho
    // document.getElementById('header').innerText = buttonText;

    // Adicionar o estado ao histórico
    history.pushState({ main: id }, '', '');

    /* 

        A sintaxe do pushState é:

        history.pushState(stateObject, title, url);

        ----------------------------------------------------
    
        {main: id, header: buttonText} (stateObject):

        Esse é o objeto de estado que você quer salvar no histórico. No seu caso, ele contém:

        main: id: Armazena o id da seção que foi clicada. Isso permitirá saber qual seção estava visível no momento em que o estado foi salvo.

        header: buttonText: Armazena o texto do botão que foi clicado, para que o cabeçalho da página possa ser restaurado corretamente se o usuário voltar para esse estado.

        Esse objeto será útil quando o usuário utilizar o botão "voltar" do navegador, permitindo que a página saiba em qual seção e com qual texto ela deve ser exibida.

        ------------------------------------------------------

        buttonText (title):

        Esse argumento é para o título da página (geralmente exibido na aba do navegador). No seu código, ele é o texto do botão clicado.

        Embora a maioria dos navegadores modernos ignorem esse argumento, ele ainda está lá como parte da sintaxe.

        ------------------------------------------------------

        '' (url):

        Esse argumento é para o URL que aparece na barra de endereços. No seu código, o valor é uma string vazia (''), o que significa que o URL não será alterado  visivelmente na barra de endereços. Se quisesse, você poderia alterar esse argumento para atualizar a URL, mas sem recarregar a página.

    */
}

// Quando o usuário clicar no botão de voltar do navegador
window.onpopstate = function (event) {

    /*
    
        window.onpopstate: Este evento é acionado quando o usuário navega pelo histórico do navegador (por exemplo, clicando no botão "Voltar"). A função definida aqui será chamada sempre que esse evento ocorrer.

        function(event): A função recebe um parâmetro event, que contém informações sobre o estado que foi restaurado.    
    */

    /* 
    
        Basicamente, daqui pra baixo ele reverte o que fez na parte de la de cima.
    
    */
    if (event.state) {
        // Atualizar o conteúdo com base no histórico
        document.querySelectorAll('main').forEach(function (main) {
            main.classList.add('hidden');
        });
        if (event.state.main) {
            document.getElementById(event.state.main).classList.remove('hidden');
        }
        
    } else {
        // Caso o estado seja nulo, mostrar o menu principal
        document.querySelectorAll('main').forEach(function (main) {
            main.classList.add('hidden');
        });
        document.getElementById('main-menu').classList.remove('hidden');
        
    }
};


