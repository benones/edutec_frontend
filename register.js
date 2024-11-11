// Adiciona um event listener para o evento de 'submit' no formulário com o ID 'registerForm'
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    // Impede o comportamento padrão de recarregar a página ao enviar o formulário
    e.preventDefault();

    // Obtém o valor do campo de entrada de nome de usuário
    const username = document.getElementById("registerUsername").value;
    // Obtém o valor do campo de entrada de senha
    const password = document.getElementById("registerPassword").value;

    try {
        // Faz uma requisição POST para o endpoint de cadastro na API
        const response = await fetch("http://localhost:3000/api/register", {
            method: "POST", // Método HTTP para envio de dados
            headers: { "Content-Type": "application/json" }, // Define o cabeçalho do tipo de conteúdo como JSON
            body: JSON.stringify({ username, password }) // Converte os dados do usuário para uma string JSON e os inclui no corpo da requisição
        });

        // Verifica se a resposta da API indica sucesso (status HTTP 200 ou 201)
        if (response.ok) {
            // Exibe uma mensagem de sucesso para o usuário
            alert("Cadastro realizado com sucesso!");
            // Redireciona para a página de login
            window.location.href = "index.html";
        } else {
            // Se houver erro, extrai a mensagem de erro do corpo da resposta e a exibe em um alerta
            const data = await response.json();
            alert(data.message);
        }
    } catch (error) {
        // Caso ocorra um erro na requisição, exibe o erro no console para análise
        console.error("Erro:", error);
    }
});

/* 

Explicação dos Principais Elementos:

    •	document.getElementById("registerForm").addEventListener("submit", async (e) => {...}): Adiciona um event listener ao formulário para interceptar o envio. Ao enviar o formulário, a função async é chamada.
    •	e.preventDefault(): Impede o comportamento padrão do formulário de recarregar a página.
    •	const username = document.getElementById("registerUsername").value;: Obtém o valor inserido no campo de nome de usuário.
    •	const password = document.getElementById("registerPassword").value;: Obtém o valor inserido no campo de senha.
    •	fetch(...): Envia uma requisição HTTP POST para o endpoint /api/register no servidor.
    •	method: "POST": Define o método HTTP como POST, usado para enviar dados.
    •	headers: { "Content-Type": "application/json" }: Define o cabeçalho indicando que os dados estão no formato JSON.
    •	body: JSON.stringify({ username, password }): Converte os dados do usuário (nome de usuário e senha) para JSON e os inclui no corpo da requisição.
    •	if (response.ok) {...}: Verifica se a resposta da API indica que o cadastro foi bem-sucedido.
    •	alert("Cadastro realizado com sucesso!"): Exibe uma mensagem de sucesso.
    •	window.location.href = "index.html";: Redireciona o usuário para a página de login.
    •	else {...}: Caso o cadastro falhe, exibe a mensagem de erro retornada pela API.
    •	catch (error) {...}: Lida com erros na requisição, exibindo o erro no console para análise.
    
    */