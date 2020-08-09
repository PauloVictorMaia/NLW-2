//Procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma ação
function cloneField(){
//duplicar campos! que campos?
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

//limpar campos! que campos?
const fields = newFieldContainer.querySelectorAll('input')
//para cada campo limpar
fields.forEach(function(field) {
//pegar o field do momento e limpa ele
field.value= "" 

})

//colocar na página: onde ?
document.querySelector('#schedule-itens').appendChild(newFieldContainer)


}
