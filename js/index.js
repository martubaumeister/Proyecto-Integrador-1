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