
const ul = document.getElementById('main')

display();
function display(){
while(ul.firstChild){
    ul.removeChild(ul.firstChild)
}
products.forEach((p)=>generateLabel(p))
console.log(ul)
}
function generateLabel(p){

let li = document.createElement('li')
li.innerHTML = `
<div class="productLabel ">
    
            <img id = "productImg" src = "${p.imgUrl} alt = "era pra ter uma img aqui" "/>
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
const cartProductsContainer = document.querySelector('#listContainer')
const cartList = document.querySelector('#cartProductsList ul')
const openFormBtn = document.querySelector('#openForm')
const closeFormBtn = document.querySelector('#closeForm')
const formContainer = document.querySelector('#formContainer')
const form = document.querySelector('#productForm')
let productsOnCartArray = [];
let quantItems = 0;



//Abre a lista de produtos do carrinho
cart.addEventListener('click',()=>{
cartProductsContainer.classList.remove('displayNone')
cartProductsContainer.classList.add('displayOn')

    productsOnCartArray.forEach((i)=>{
        let li = document.createElement('li')
        li.textContent = i
        cartList.appendChild(li)
    })
})


//Fecha a lista de produtos do carrinho
cartProductsContainer.addEventListener('click',()=>{
if(cartProductsContainer.classList.contains('displayOn')){
    cartProductsContainer.classList.remove('displayOn')  
    cartProductsContainer.classList.add('displayNone')

while(cartList.firstChild){
    cartList.removeChild(cartList.firstChild)
}
}
})


//Handles dos eventos

function handleAddToCart(event){
    productsOnCartArray.push(event.target.parentNode.childNodes[3].innerText)   
    quantItems += 1;
    displayQuant.innerText = quantItems
}

function handleDelete(event){

let confirmation = confirm("Are U sure little boy ?");
    if(confirmation){
  let ref = event.target.parentNode.childNodes[3].outerText;
    
        for(let i =0;i<products.length;i++){
            if(products[i].name === ref){
                products.splice(i,1);
            }
        }

display();
updateAddToCartList()
updateDeleteBtns()
addToCartListeners()
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
    
  let name =  event.target.childNodes[3].value
  let price =  event.target.childNodes[5].value
  let imgURL =  event.target.childNodes[7].value

let product = {
    "name" : name,
    "price" : price,
    "imgUrl" : imgURL

}
products.push(product)
generateLabel(products[products.length - 1]);
updateAddToCartList();
updateDeleteBtns();
addToCartListeners();
deleteBtnsListers();
})

function updateAddToCartList() {
    addToCart = document.querySelectorAll('.addToCart'); 
}
function updateDeleteBtns() {
    deleteBtns = document.querySelectorAll('.delete'); 
}