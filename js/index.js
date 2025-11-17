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

fetch('https://dummyjson.com/products')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    let seccion1= document.querySelector(".tarjetas-home1")
    seccion1.style.display= "none"

    let seccion2= document.querySelector(".tarjetas-home2")
    seccion2.style.display= "none"


    let contenido= document.querySelector(".contenido")
    tarjetas= ""
    for (let i=0; i<data.products.length;i++){
    tarjetas= tarjetas + ` 
    <article class="tarjeta-home">
        <p class="titulo">${data.products[i].title}</p>
        <p class="precio">Precio:${data.products[i].price}</p>
        <a class="boton"  href="product.html">Ver detalle</a>
      </article>`
    
    contenido.innerHTML= `<div class="cajita">Todos los productos</div>
    <h2 class="seccion1">productos más vendidos</h2>` 
    + tarjetas
    }
})
.catch(function(error){
    console.log(error)
})