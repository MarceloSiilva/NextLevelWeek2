// Procurar o Botao
document.queryselector("#add-time")

// Quando Clicar no Botao
    .addEventListener('click', cloneField)

// Executar uma acao
function cloneField () {
    // Duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    // limpar os campos.Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo. Limpar
    fields.forEach(function () {
        field.value = ""
        
    })

    // Colocar na pagina; onde colocar
    document.queryselector('#shedule-items').appendChild(newFieldContainer)

}
    