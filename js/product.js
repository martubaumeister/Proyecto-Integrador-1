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

fetch('https://dummyjson.com/products/1')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let detalle = document.querySelector(".detalle")
    detalle.style.display= "none" 
    let ocultar= document.querySelector(".reviews")
    ocultar.style.display= "none"
    let prod = document.querySelector(".div-product")
    
    let descripcion= ""
   
    descripcion = descripcion + `<article class= "fetch1">
          <p class="title" href="./products.html?id=${data.title}"><strong>Producto:</strong>${data.title}</a>
          <p class="description"><strong>Descripcion:</strong>${data.description} </p>
          <p class="precio"><strong>Precio:</strong>${data.price} </p>
          <p class="marca"><strong>Marca:</strong>${data.brand} </p>
          <p class="categoria"><strong>Categoria:</strong>${data.category} </p>
          <p class="stock"><strong>Stock:</strong>${data.stock} </p>
          <p class="tags"><strong>Tags:</strong>${data.tags} </p>
        </article>
        <article class="fetch2">
        <h3>Reviews:</h3>
        <p class="reviews"><strong>Rating:</strong>${data.reviews[0]} </p>
        <p class="reviews"><strong>Comentario:</strong>${data.reviews[1]} </p>
        <p class="reviews"><strong>Fecha:</strong>${data.reviews[2]} </p>
        <p class="reviews"><strong>Usuario:</strong>${data.reviews[3]} </p>
        </article>
        `
        
    prod.innerHTML= descripcion


    
    

})
.catch(function(error){
    console.log(error)
})