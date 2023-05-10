const btnSubmit1 = document.getElementById("btn-submit1");
// Adicionar um ouvinte de evento de clique ao botão de envio do formulário 1
btnSubmit1.addEventListener("click",function() {
  // Remover a propriedade "display: none" do formulário 2
  
  document.getElementById("estilo2").style.display = "block";
  
  // Ocultar o conteúdo do botão de envio do formulário 1
  btnSubmit1.style.display = "none";

  // Ocultar os itens que você deseja quando o botão é clicado
  document.getElementById("cadastro").style.display = "none";
  // ...
});

// Selecionar o botão de envio do formulário 2
const btnSubmit2 = document.getElementById("btn-submit2");

btnSubmit2.addEventListener("click", function() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarsenha1").value;

  

  const usuario = {
    nome,
    email,
    senha,
    confirmarSenha
  };

  // enviar dados do usuário para a API
  fetch("https://psiwexer-nxqq.onrender.com/usuarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(usuario),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Redirecionar para a página desejada após o envio bem-sucedido do formulário
    window.location.href = "outra_pagina.html"; // altere aqui para a página desejada
  })
  .catch((error) => {
    console.error(error);
  });
function minhaFuncao() {
  // Obter os valores de email e senha do formulário de login
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Enviar uma requisição GET para obter a lista de usuários
  fetch("https://psiwexer-nxqq.onrender.com/usuarios")
    .then((response) => response.json())
    .then((usuarios) => {
      // Verificar se as credenciais correspondem a algum usuário
      const usuario = usuarios.find(
        (u) => u.email === email && u.senha === senha
      );

      // Se as credenciais estiverem corretas, redirecionar o usuário para a página desejada
      if (usuario) {
        window.location.href = "index.html";
      } else {
        // Caso contrário, exibir uma mensagem de erro
        alert("Email ou senha incorretos.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function openModal() {
  const modal = document.getElementById("modalsair");
  modal.style.display = "block";

  // adiciona um event listener para detectar clique fora do modal
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
