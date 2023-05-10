function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal1() {
  document.getElementById("myModal").style.display = "none";
}
const form = document.querySelector("#form-paciente");

let novaLinha;

document.querySelector("#btnSalvar").addEventListener("click", (event) => {
  // Cria um objeto paciente com os dados do formulário
  const paciente = {
    cpf: form.codigo.value,
    nome: form.nome.value,
    dataNascimento: form.data.value,
    email: form.email.value,
    sexo: form.sexo.value,
    nacionalidade: form.nacionalidade.value,
    naturalidade: form.naturalidade.value,
    profissao: form.profissao.value,
    escolaridade: form.escolaridade.value,
    estadoCivil: form["estado-civil"].value,
    nomeMae: form.mae.value,
    nomePai: form.pai.value,
  };

  // Faz uma requisição POST para a API com os dados do paciente
  fetch("https://psiwexer-nxqq.onrender.com/pacientes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paciente),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao salvar paciente");
    }
    return response.json();
  })
  .then((pacienteSalvo) => {
    // Adiciona o novo paciente à tabela
    const tbody = document.querySelector("table tbody");

    // Cria uma nova linha na tabela
    novaLinha = document.createElement("tr");

    // Adiciona as células na linha
    novaLinha.innerHTML = `
      <td>${pacienteSalvo.id}</td>
      <td>${pacienteSalvo.nome}</td>
      <td>${pacienteSalvo.cpf}</td>
      <td>
        <button 
          <i class="ri-todo-fill"></i>
        </button>
        <button type="button" id=onclick="openModal2()" type="button" id="btn-visualizar">
          <i class="ri-edit-2-line"></i>
        </button>
        <button type="button" id="btn-cancelar">
          <i class="ri-delete-bin-fill"></i>
        </button>
      </td>
    `;

    // Adiciona a nova linha na tabela
    tbody.appendChild(novaLinha);
    console.log("depois de adicionar nova linha");

    // Fecha o modal
    closeModal();
    atualizarTabela();
  })
  .catch((error) => {
    console.error("Erro ao salvar paciente", error);
  });
});

function atualizarTabela() {
  fetch("https://psiwexer-nxqq.onrender.com/pacientes")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar pacientes");
      }
      return response.json();
    })
    .then((pacientes) => {
      // Limpa a tabela atual
      const tbody = document.querySelector("table tbody");
      tbody.innerHTML = "";

      // Adiciona os pacientes na tabela
      pacientes.forEach((paciente) => {
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `
            <td>${paciente.id}</td>
            <td>${paciente.nome}</td>
            <td>${paciente.cpf}</td>
            <td>
            <button onclick="openModal2()" type="button" id="btn-visualizar">
            <i class="ri-todo-fill"></i>
              </button>
              <button type="button" id="btn-salvar1">
                <i class="ri-edit-2-line"></i>
              </button>
              <button type="button" id="btn-cancelar">
                <i class="ri-delete-bin-fill"></i>
              </button>
            </td>
          `;
        tbody.appendChild(novaLinha);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar pacientes", error);
    });
}

// Chama a função de atualização da tabela no início da execução do código
atualizarTabela();
