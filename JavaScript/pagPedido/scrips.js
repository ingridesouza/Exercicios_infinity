const form = document.querySelector('#form_pedido')
const tbody = document.querySelector("tbody")
const fieldsForm1 = ["nome", "telefone", "endereco", "sabor_pizza", "tamanho_pizza"];

const sabores = {
    1: 'Pepperoni',
    2: 'Calabresa',
    3: 'Marguerita',
    4: 'Bacon'
}

const pedidos = []

let contador = 1;

form.addEventListener('submit', (e) => cadastrarPizza(e, fieldsForm1))

function cadastrarPizza(eventoDeSubmit, fields) {
    const checkboxes = document.querySelectorAll("#form_pedido input[type=checkbox]:checked")
    /* 
        verificar se a lista gerada de checkbox possui algum valor com o atributo length 
        se não possuir, nenhum input está checkado
    */

    //prevenir o comportamento padrão do formulário de dar f5 na página
    eventoDeSubmit.preventDefault()
    let formOk = true

    fields.forEach(item => {
        const field = eventoDeSubmit.target[item].value

        if(!field) {
            formOk = false
        }
    })

    if(!formOk) {
        alert("Preencha todos os campos")
        return;
    }

    const novoPedido = {
        id: contador++,
        nome: eventoDeSubmit.target.nome.value,
        telefone: eventoDeSubmit.target.telefone.value,
        endereco: eventoDeSubmit.target.endereco.value,
        sabor_pizza: sabores[eventoDeSubmit.target.sabor_pizza.value],
        tamanho_pizza: eventoDeSubmit.target.tamanho_pizza.value,
        condimentos: [...checkboxes].map(checkbox => checkbox.value).join(", ")
    }    

    pedidos.push(novoPedido)

    mostrarPedidos()

    localStorage.setItem("pedidos-pizzaria", JSON.stringify(pedidos))
}

