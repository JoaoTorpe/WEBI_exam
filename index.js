
const ul = document.getElementById('main')

display();
function display(){
while(ul.firstChild){
    ul.removeChild(ul.firstChild)
}
products.forEach((p)=>generateLabel(p))
}
function generateLabel(p){

let li = document.createElement('li')
li.innerHTML = `
<div class="productLabel ">
    
            <img class = "productImg" src = "${p.imgUrl} alt = "era pra ter uma img aqui" "/>
        <h3>${p.name}</h3>
        <p>R$ ${p.price}</p>
    <button class="addToCart" >Add to cart</button>
    
</div>`


ul.appendChild(li)


}


const cart = document.querySelector('#cart');
let addToCart = document.querySelectorAll('.addToCart');
let deleteBtns = document.querySelectorAll('.delete')
const displayQuant = document.querySelector('#displayQuant')
const cartProductsList = document.querySelector('#cartProductsList')
const closeList = document.querySelector('#closeList')
const cartList = document.querySelector('#itemsUl')
const openFormBtn = document.querySelector('#openForm')
const closeFormBtn = document.querySelector('#closeForm')
const formContainer = document.querySelector('#formContainer')
const form = document.querySelector('#productForm')
let productsOnCartArray = [];
let quantItems = 0;



//Abre a lista de produtos do carrinho


cart.addEventListener('click',()=>{
cartProductsList.classList.remove('displayNone')
cartProductsList.classList.add('displayOn')
ul.classList.remove('displayOn')
ul.classList.add('displayNone')

    productsOnCartArray.forEach((i)=>{
        let li = document.createElement('li')
        li.innerHTML = `
        <div class="itemOnListLabel" >
        <img class = "itemOnCartImg" src = "${i.img} alt = "era pra ter uma img aqui" "/>
        <h3>${i.name}</h3>
        <button  class="delete" >Delete</button>
        </div>
        `
        cartList.appendChild(li)
    })
    updateDeleteBtns()
    deleteBtnsListers()
    console.log(productsOnCartArray)
    console.log(cartList.childNodes)
   
    
})


//Fecha a lista de produtos do carrinho
closeList.addEventListener('click',()=>{

    cartProductsList.classList.remove('displayOn')  
    cartProductsList.classList.add('displayNone')
    ul.classList.remove('displayNone')
    ul.classList.add('displayOn')

while(cartList.firstChild){
    cartList.removeChild(cartList.firstChild)
}

})


//Handles dos eventos

function handleAddToCart(event){

    console.log(event.target.parentNode.childNodes[1].getAttribute('src'))
    let cartItem = {
        "name":event.target.parentNode.childNodes[3].innerText,
        "img": event.target.parentNode.childNodes[1].getAttribute('src')
    }
    productsOnCartArray.push(cartItem)
    quantItems += 1;
    displayQuant.innerText = quantItems
}


function handleDelete(event){

let confirmation = confirm("Deseja remover ?");
    if(confirmation){
  let ref = event.target.parentNode.childNodes[3].outerText;
    let cartListNodes = cartList.childNodes

    //Quando o nodelist esta vazio o primeira childe é um text
        if(cartListNodes[0].nodeName == "#text"){
            cartListNodes[0].parentNode.removeChild(cartListNodes[0])
        }
      
//Remove os li do ul
    for (let i = cartListNodes.length - 1; i >= 0; i--) {
        if (cartListNodes[i].childNodes[1].childNodes[3].innerText === ref) {
            cartListNodes[i].parentNode.removeChild(cartListNodes[i]);
           break;
        }
    }

    //Remove os itens do array
    for(let i =productsOnCartArray.length-1;i>=0;i--){
        if(productsOnCartArray[i].name === ref){
            productsOnCartArray.splice(i,1);
            quantItems -= 1;
            break;
        }
    }
        displayQuant.innerText = quantItems
updateDeleteBtns()
deleteBtnsListers()

    }

}



//Adicionando listeners dos buttons
   addToCartListeners();
function addToCartListeners(){
addToCart.forEach((i)=>{   

    i.removeEventListener('click',handleAddToCart)
    
    i.addEventListener('click',handleAddToCart)
 })
}
deleteBtnsListers();
function deleteBtnsListers(){

deleteBtns.forEach((i)=>{   

    i.removeEventListener('click',handleDelete)
    
    i.addEventListener('click',handleDelete)
 })
}


//Abrir formulario

openFormBtn.addEventListener('click',()=>{
    formContainer.classList.add('formContainerDisplayOn')
})

//fechar fomrmulario

closeFormBtn.addEventListener('click',()=>{
    if(formContainer.classList.contains('formContainerDisplayOn')){
        formContainer.classList.remove('formContainerDisplayOn')
        }
})


//lidar com o submit do form

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    formContainer.classList.remove('formContainerDisplayOn')

  let name =  document.getElementById('productName').value
  let price = document.getElementById('productPrice').value
  let imgURL = document.getElementById('productImageUrl').value

if(name == '' || price == '' || imgURL == ''){
    alert("Preencha os campos !")
}
else{

let product = {
    "name" : name,
    "price" : price,
    "imgUrl" : imgURL

}
    document.getElementById('productName').value = ''
    document.getElementById('productPrice').value = ''
    document.getElementById('productImageUrl').value = ''
products.push(product)
generateLabel(products[products.length - 1]);
updateAddToCartList();
updateDeleteBtns();
addToCartListeners();
deleteBtnsListers();
}


})

function updateAddToCartList() {
    addToCart = document.querySelectorAll('.addToCart'); 
}
function updateDeleteBtns() {
    deleteBtns = document.querySelectorAll('.delete'); 
}