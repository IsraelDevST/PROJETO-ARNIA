function minhaFuncao() {
    // Obter os valores de email e senha do formulário de login
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const dadosLogin = {
      email,
      senha
    };
  
    // Enviar os dados de login para a API
    fetch("https://psiwexer-nxqq.onrender.com/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosLogin),
    })
      .then((response) => response.json())
      .then((data) => {
        // Se os dados estiverem corretos, redirecionar o usuário para a página desejada
        if (data.autenticado) {
          window.location.href = "inicio.html";
        } else {
          // Caso contrário, exibir uma mensagem de erro
          alert("Email ou senha incorretos.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
