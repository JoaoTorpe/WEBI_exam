
const ul = document.getElementById('main')

products.forEach((p)=>generateLabel(p))

function generateLabel(p){

let li = document.createElement('li')
li.innerHTML = `

<div class="productLabel">
            <img id = "productImg" src = "${p.imgUrl} alt = "era pra ter uma img aqui" "/>
        <h3>${p.name}</h3>
        <p>R$ ${p.price}</p>
    <button class="addToCart" >Add to cart</button>
    
</div>`
ul.appendChild(li)

}


const cart = document.querySelector('#cart');
const addToCart = document.querySelectorAll('.addToCart');
const displayQuant = document.querySelector('#displayQuant')
const cartProductsContainer = document.querySelector('#listContainer')
const cartList = document.querySelector('#cartProductsList ul')
let productsArray = [];
let quantItems = 0;
//Abre a lista de produtos do carrinho
cart.addEventListener('click',()=>{
cartProductsContainer.classList.remove('displayNone')
cartProductsContainer.classList.add('displayOn')
    productsArray.forEach((i)=>{
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
}
})

//Adiciona produtos ao array

addToCart.forEach((i)=>{   
    i.addEventListener('click',(event)=>{
     productsArray.push(event.target.parentNode.childNodes[3].innerText)   
     quantItems += 1;
     displayQuant.innerText = quantItems
})  })


