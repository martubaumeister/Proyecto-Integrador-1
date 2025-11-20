fetch('https://dummyjson.com/products/category-list')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);


    let category= document.querySelector(".category")
    barra= ""
    barra = barra + `<article class="barra-lateral">
    <a class="contenido-cat" href="./category.html">${data[0]} </a> 
    <a class="contenido-cat" href="./category.html">${data[1]} </a> 
    <a class="contenido-cat" href="./category.html">${data[7]} </a>
    <a class="contenido-cat" href="./category.html">${data[8]} </a> 
    <a class="contenido-cat" href="./category.html">${data[12]} </a>
    <a class="contenido-cat" href="./category.html">${data[14]} </a>
    <a class="contenido-cat" href="./category.html">${data[15]} </a> 
    <a class="contenido-cat" href="./category.html">${data[17]} </a>
    <a class="contenido-cat" href="./category.html">${data[19]} </a>
    <a class="contenido-cat" href="./category.html">${data[20]} </a> 
    <a class="contenido-cat" href="./category.html">${data[21]} </a>
    <a class="contenido-cat" href="./category.html">${data[22]} </a>
    <a class="contenido-cat" href="./category.html">${data[23]} </a>    
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

let tituloBusqueda = document.querySelector(".titulo-busqueda")
tituloBusqueda.innerText = `Resultados para: ${loQueEscribioElUsuario}`;



fetch(`https://dummyjson.com/products/search?q=${loQueEscribioElUsuario}`)

.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)

let resultado = document.querySelector(".resultados-busqueda")

    
if (data.products.length == 0){
    resultado.innerHTML = `
    <p>No hay resultados para el termino: ${loQueEscribioElUsuario}</p>`;
    return;
}


    
    let producto_search= ""
    for (let i=0; i<data.products.length;i++){
            producto_search = producto_search + `
          <article class="articulo-re">
     <a class="name-re" href="./product.html?id=${data.products[i].id}">
        Name: ${data.products[i].title}
      </a>
      <p class="status-re">Precio: ${data.products[i].price}</p>
    </article>
  `;
        }
    resultado.innerHTML= producto_search
    })
.catch(function(error){
    console.log(error)
})

