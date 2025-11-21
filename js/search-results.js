let formulario = document.querySelector(".caja-busqueda");
let campoBusqueda = document.querySelector('input[name="q"]');
let mensaje = document.querySelector(".error-busqueda");

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    
    if(campoBusqueda.value.length == 0){
        mensaje.innerText = "El campo de busqueda no puede estar vacio";
    }else if(campoBusqueda.value.length < 3){
        mensaje.innerHTML = `<p class="error-caracteres">Debes escribir al menos 3 caracteres</p>`;
    }else{
        mensaje.innerText = "";
        formulario.submit();
    }
})


fetch('https://dummyjson.com/products/category-list')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);


    let category= document.querySelector(".category");
    barra= "";
    barra = barra + `<article class="barra-lateral">
    <a class="contenido-cat" href="./category.html?category=${data[0]}">${data[0]} </a> 
    <a class="contenido-cat" href="./category.html?category=${data[1]}">${data[1]} </a> 
    <a class="contenido-cat" href="./category.html?category=${data[7]}">${data[7]} </a>
    <a class="contenido-cat" href="./category.html?category=${data[8]}">${data[8]} </a> 
    <a class="contenido-cat" href="./category.html?category=${data[12]}">${data[12]} </a>
    <a class="contenido-cat" href="./category.html?category=${data[14]}">${data[14]} </a>
    <a class="contenido-cat" href="./category.html?category=${data[15]}">${data[15]} </a> 
    <a class="contenido-cat" href="./category.html?category=${data[17]}">${data[17]} </a>
    <a class="contenido-cat" href="./category.html?category=${data[19]}">${data[19]} </a>
    <a class="contenido-cat" href="./category.html?category=${data[20]}">${data[20]} </a> 
    <a class="contenido-cat" href="./category.html?category=${data[21]}">${data[21]} </a>
    <a class="contenido-cat" href="./category.html?category=${data[22]}">${data[22]} </a>
    <a class="contenido-cat" href="./category.html?category=${data[23]}">${data[23]} </a>        
    `;
    category.innerHTML= barra;
})
.catch(function(error){
    console.log(error);
})

let oculta= document.querySelector(".se-oculta");
oculta.style.display= "none";
let results= document.querySelector(".contenido-form");


let queryString= location.search;
let queryStringObj= new URLSearchParams(queryString);

let loQueEscribioElUsuario = queryStringObj.get("q");

let tituloBusqueda = document.querySelector(".titulo-busqueda");
tituloBusqueda.innerText = `Resultados para: "${loQueEscribioElUsuario}"`;



fetch(`https://dummyjson.com/products/search?q=${loQueEscribioElUsuario}`)

.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

let resultado = document.querySelector(".resultados-busqueda");

    
if (data.products.length == 0){
    resultado.innerHTML = `
    <p>No hay resultados para el termino: "${loQueEscribioElUsuario}"</p>`;
    return;
}

    let producto_search= "";
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
    resultado.innerHTML= producto_search;
    })
.catch(function(error){
    console.log(error);
})

