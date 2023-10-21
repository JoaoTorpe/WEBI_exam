
const ul = document.getElementById('main')

products.forEach((p)=>generateLabel(p))

function generateLabel(p){

let li = document.createElement('li')
li.innerHTML = `

<div class="productlabel">
            <img id = "productImg" src = "${p.imgUrl} alt = "era pra ter uma img aqui" "/>
        <h3>${p.name}</h3>
        <p>R$ ${p.price}</p>
    <button id="addToCart" >Add to cart</button>
    
</div>`
ul.appendChild(li)


}

