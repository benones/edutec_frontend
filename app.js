// Seleciona o formulário e o elemento de mensagem
const form = document.getElementById('playerForm');
const message = document.getElementById('message');

// Define uma função assíncrona para lidar com o envio do formulário
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;

    try {
        // Envia uma requisição POST para o backend com os dados 'nome' e 'sobrenome'
        const response = await fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, sobrenome }),
        });

        // Verifica se a requisição foi bem-sucedida
        if (response.ok) {
            message.textContent = 'Jogador cadastrado com sucesso!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Erro ao cadastrar jogador!';
            message.style.color = 'red';
        }
    } catch (error) {
        message.textContent = 'Erro ao cadastrar jogador!';
        message.style.color = 'red';
        console.error('Erro:', error);
    }

    // Limpa os campos do formulário após o envio dos dados
    form.reset();
});