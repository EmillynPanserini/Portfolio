

// <========== Função para selecionar uma opção do menu =================>
   

var menuItem = document.querySelectorAll('.item-menu')


function selectOption(){
    // varrer os valores
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )     
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectOption)
)

// <========== Expandir menu =================>

var btnEx = document.querySelector('#Expandir')
var menuSide = document.querySelector('.interface')

console.log("Botão encontrado:", btnEx); // Verifica se o botão foi selecionado
console.log("Menu encontrado:", menuSide);


btnEx.addEventListener('click', function(){
    console.log("Botão clicado"); // Confirma o clique
    menuSide.classList.toggle('expandir')
})