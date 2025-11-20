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

fetch('https://dummyjson.com/products')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let seccion1= document.querySelector(".tarjetas-home1");
    let seccion2= document.querySelector(".tarjetas-home2");
    let contenido= document.querySelector(".contenido");
    
    tarjetas= "";
    for (let i=0; i<data.products.length;i++){
    tarjetas= tarjetas + ` 
    <article class="tarjeta-home">
    <div class="imagen-cat">
            <img src="${data.products[i].images}" alt="imagen">
        </div>
        <p class="titulo">${data.products[i].title}</p>
        <p class="precio"><strong>Precio: </strong>${data.products[i].price}</p>
        <p class="descripcion"> ${data.products[i].description}</p>
        <img src="">
        <a class="boton"  href="product.html?id=${data.products[i].id}">Ver detalle</a>
      </article>`;
    
    seccion1.innerHTML= tarjetas;
    }
})
.catch(function(error){
    console.log(error);
})

