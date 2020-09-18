// Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Quando clicar no botao

//Executar uma acao
function cloneField() {
   
    //Duplcar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean: true ou false

    //limpar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field)  {
        field.value = ""
    })


    //colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}