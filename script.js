// Adiciona um event listener para o evento de 'submit' no formulário com o ID 'loginForm'
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    // Impede o comportamento padrão de recarregar a página ao enviar o formulário
    e.preventDefault();

    // Obtém o valor do campo de entrada de nome de usuário
    const username = document.getElementById("username").value;
    // Obtém o valor do campo de entrada de senha
    const password = document.getElementById("password").value;

    try {
        // Faz uma requisição POST para o endpoint de login na API
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST", // Define o método HTTP como POST
            headers: { "Content-Type": "application/json" }, // Define o cabeçalho do tipo de conteúdo como JSON
            body: JSON.stringify({ username, password }) // Converte os dados do usuário para JSON e os inclui no corpo da requisição
        });

        // Verifica se a resposta da API indica sucesso (status HTTP 200)
        if (response.ok) {
            // Converte a resposta para JSON para acessar o token gerado
            const data = await response.json();
            // Armazena o token de autenticação no localStorage para acessos futuros
            localStorage.setItem("token", data.token);
            // Redireciona para a página de boas-vindas após login bem-sucedido
            window.location.href = "welcome.html";
        } else {
            // Se o login falhar, exibe uma mensagem de erro para o usuário
            alert("Login falhou!");
        }
    } catch (error) {
        // Caso ocorra um erro na requisição, exibe o erro no console para análise
        console.error("Erro:", error);
    }
});

/* 
Explicação dos Principais Elementos:

    •	document.getElementById("loginForm").addEventListener("submit", async (e) => {...}): Adiciona um event listener ao formulário de login para interceptar o envio e acionar a função async quando o formulário é enviado.
    •	e.preventDefault(): Impede o comportamento padrão do formulário de recarregar a página ao ser enviado.
    •	const username = document.getElementById("username").value;: Obtém o valor inserido no campo de nome de usuário.
    •	const password = document.getElementById("password").value;: Obtém o valor inserido no campo de senha.
    •	fetch(...): Envia uma requisição HTTP POST para o endpoint /api/login no servidor para verificar as credenciais do usuário.
    •	method: "POST": Define o método HTTP como POST, necessário para enviar as credenciais.
    •	headers: { "Content-Type": "application/json" }: Define o cabeçalho indicando que os dados estão no formato JSON.
    •	body: JSON.stringify({ username, password }): Converte o nome de usuário e a senha em JSON e os inclui no corpo da requisição.
    •	if (response.ok) {...}: Verifica se a resposta da API indica sucesso no login (status HTTP 200).
    •	const data = await response.json();: Converte a resposta para JSON para acessar o token retornado pela API.
    •	localStorage.setItem("token", data.token);: Armazena o token JWT no localStorage para uso em futuras requisições autenticadas.
    •	window.location.href = "welcome.html";: Redireciona o usuário para a página de boas-vindas após o login.
    •	else {...}: Caso o login falhe, exibe uma mensagem de erro.
    •	catch (error) {...}: Lida com possíveis erros na requisição, exibindo o erro no console para análise.
*/