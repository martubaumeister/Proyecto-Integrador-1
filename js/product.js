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

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id")

fetch('https://dummyjson.com/products/1' +id)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let detalle = document.querySelector(".detalle")
    detalle.style.display= "none" 
    let reviewsA = document.querySelector(".reviews")
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
        `
    
        for(let i=0; i < data.reviews.length; i++){
            reviewsA = reviewsA + `
            <article class="fetch2">
                <h3>Reviews:</h3>
                <p class="reviews"><strong>Rating:</strong>${data.reviews[i].rating} </p>
                <p class="reviews"><strong>Comentario:</strong>${data.reviews[i].comment} </p>
                <p class="reviews"><strong>Fecha:</strong>${data.reviews[i].date} </p>
                <p class="reviews"><strong>Usuario:</strong>${data.reviews[i].reviewerName} </p>
            </article>`
        }
        reviewsA.innerHTML = reviewsA
      
       
        
    prod.innerHTML= descripcion


    
    

})
.catch(function(error){
    console.log(error)
})