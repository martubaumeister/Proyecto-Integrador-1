fetch('https://dummyjson.com/products/category-list')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let category= document.querySelector(".category")
    barra= ""
    barra = barra + `<article class="barra-lateral">
    <p class="contenido-cat">${data[0]} </p> 
    <p class="contenido-cat">${data[1]} </p> 
    <p class="contenido-cat">${data[7]} </p>
    <p class="contenido-cat">${data[8]} </p> 
    <p class="contenido-cat">${data[12]} </p>
    <p class="contenido-cat">${data[14]} </p>
    <p class="contenido-cat">${data[15]} </p> 
    <p class="contenido-cat">${data[17]} </p>
    <p class="contenido-cat">${data[19]} </p>
    <p class="contenido-cat">${data[20]} </p> 
    <p class="contenido-cat">${data[21]} </p>
    <p class="contenido-cat">${data[22]} </p>
    <p class="contenido-cat">${data[23]} </p>        
    `
    category.innerHTML= barra
})
.catch(function(error){
    console.log(error);
})

let oculta= document.querySelector(".se-oculta")
oculta.style.display= "none"
let results= document.querySelector(".contenido-form")


let queryString= location.search
let queryStringObj= new URLSearchParams(queryString)

let loQueEscribioElUsuario = queryStringObj.get("q")

fetch(`https://dummyjson.com/products/search?q=${loQueEscribioElUsuario}`)

.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    
    let resultado= document.querySelector(".contenido-form")
    let producto_search= ""
    for (let i=0; i<data.products.length;i++){
            producto_search = producto_search + `
          <article class="articulo">
      <a class="name" href="./search-results.html?id=${data.products[i].id}">
        Name: ${data.products[i].title}
      </a>
      <p class="status">Precio: ${data.products[i].category}</p>
    </article>
  `;
        }
    resultado.innerHTML= producto_search
    })
.catch(function(error){
    console.log(error)
})

