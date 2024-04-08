# HTML
# CSS
Cascading Style Sheet
```CSS
/* declarações */
body, table, input, button {
  font: 300 16px/140% 'Roboto', sans-serif; /*peso/ tam fonte/altura da linha/nome da fonte*/
  
}
body {
  background-color: #121214;
  color: #ffffff;
}

table {
  border-collapse: collapse;
}
table thead {
  font-size: 14px;
  line-height: 16px;
}
thead th,
tbody td {
  padding: 12px 16px;
}

tbody td {
  border-top: 1px solid #ffffff1a;
  font-size: 13px;
  line-height: 15px;
  color: #C4C4CC;
}

tbody td strong {
  color: white;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}
tbody td small {
  font-size: 12px;
  line-height: 16px;
}
tbody td button {
  all: unset;
  color: #9FF6CC;
}
tbody td button:hover {
  text-decoration: underline;
}
```
# JavaScript
```js
// variaveis
const mensagem = 'Oi, tudo bem?'
// tipos de dados
  // number
  // string
// funcao
alert(mensagem)

// Objeto JavaScript
const participante = {
  nome: "Daniel Silveira",
  email: "danielsilveira.contato@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

let participantes = [
  {
    nome: "Daniel Silveira",
    email: "danielsilveira.contato@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
]

// estrutura de repetição - loop
 for(let participante of participantes){
  // faça alguma coisa aqui
  // enquanto tiver participantes nessa lista
}

// projeto de participantes
// array
let participantes = [
  {
    nome: "Daniel Silveira",
    email: "danielsilveira.contato@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },

  {
    nome: "Suzanne Moraes",
    email: "suzannemoraes@gmail.com",
    dataInscricao: new Date(2024, 3, 21, 19, 20),
    dataCheckIn: new Date(2024, 3, 21, 22, 00)
  },

  {
    nome: "Carlos Andrade",
    email: "carlos.andrade@example.com",
    dataInscricao: new Date(2024, 2, 23, 10, 30),
    dataCheckIn: new Date(2024, 2, 26, 14, 15)
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
      ${participante.dataInscricao}
    </td>
    <td>
      ${participante.dataCheckIn}
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
```