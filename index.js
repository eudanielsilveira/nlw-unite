// array
let participantes = [
  {
    nome: "Daniel Silveira",
    email: "danielsilveira.contato@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },

  {
    nome: "Suzanne Moraes",
    email: "suzannemoraes@gmail.com",
    dataInscricao: new Date(2024, 3, 21, 19, 20),
    dataCheckIn: null
  },

  {
    nome: "Carlos Andrade",
    email: "carlos.andrade@example.com",
    dataInscricao: new Date(2024, 2, 23, 10, 30),
    dataCheckIn: null
  },

  {
    nome: "Ana Beatriz",
    email: "ana.beatriz@example.com",
    dataInscricao: new Date(2024, 2, 24, 16, 45),
    dataCheckIn: new Date(2024, 2, 27, 18, 30)
  },

  {
    nome: "Lucas Martins",
    email: "lucas.martins@example.com",
    dataInscricao: new Date(2024, 2, 25, 09, 10),
    dataCheckIn: new Date(2024, 2, 28, 20, 00)
  },

  {
    nome: "Mariana Costa",
    email: "mariana.costa@example.com",
    dataInscricao: new Date(2024, 2, 26, 13, 20),
    dataCheckIn: new Date(2024, 2, 29, 19, 50)
  },

  {
    nome: "João Pedro",
    email: "joao.pedro@example.com",
    dataInscricao: new Date(2024, 2, 27, 15, 35),
    dataCheckIn: new Date(2024, 3, 1, 17, 25)
  },

  {
    nome: "Fernanda Lima",
    email: "fernanda.lima@example.com",
    dataInscricao: new Date(2024, 2, 28, 11, 50),
    dataCheckIn: new Date(2024, 3, 2, 16, 40)
  },

  {
    nome: "Rafael Souza",
    email: "rafael.souza@example.com",
    dataInscricao: new Date(2024, 2, 29, 14, 05),
    dataCheckIn: new Date(2024, 3, 3, 15, 15)
  },

  {
    nome: "Patricia Oliveira",
    email: "patricia.oliveira@example.com",
    dataInscricao: new Date(2024, 3, 1, 12, 30),
    dataCheckIn: new Date(2024, 3, 4, 13, 45)
  },

  {
    nome: "Eduardo Rocha",
    email: "eduardo.rocha@example.com",
    dataInscricao: new Date(2024, 3, 2, 17, 55),
    dataCheckIn: new Date(2024, 3, 5, 18, 10)
  }
]
const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  // condicional
  if(participante.dataCheckIn == null){
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>
      ${dataInscricao}
    </td>
    <td>
      ${dataCheckIn}
    </td>
  </tr>
  `
}
const atualizarLista = (participantes) => {
  let output = ""
// estrutura de repetição - loop
 for(let participante of participantes){
  output = output + criarNovoParticipante(participante)
}
// substituir informação do HTML
document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes) // executa função atualizarLista

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )
  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulário
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name."email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmar se realmente quer fazer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

  if(confirm(mensagemConfirmacao) == false) {
    return
  }
  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  // atualizar a lista de participantes
  atualizarLista(participantes)
}