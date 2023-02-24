let listaDeItens = []

// variavel para receber o form

const form = document.getElementById("form-itens");
const itensInput = document.getElementById("receber-item");

//para ouvir o click em submit
form.addEventListener("submit", function (evento) {
            //impedir que algo aconteça
    evento.preventDefault()
    salvarItem();
})

function salvarItem() {
                //receber o valor de itens
    const comprasItem = itensInput.value;
    //verificar se o item já foi colocado
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase())

    if(checarDuplicado) {
        alert ("Item já existe")
    } else {
        //receber o valor da const acima e criar um "array"
        listaDeItens.push({
            valor: comprasItem
        })
    }

    console.log(listaDeItens);
}