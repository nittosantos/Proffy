document.querySelector("#add-time") //procurar botão
.addEventListener('click', cloneField) //quando clicar no botão

//executar uma ação para Duplicar os campos 
function cloneField() {

  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  const fields = newFieldContainer.querySelectorAll('input')

  fields.forEach(function(field) {
    field.value = ""
  })

  document.querySelector('#schedule-items').appendChild(newFieldContainer)

}