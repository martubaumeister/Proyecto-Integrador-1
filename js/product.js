fetch('https://dummyjson.com/products/category-list')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let category= document.querySelector(".category")
    barra= ""
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
    `
    category.innerHTML= barra
})
.catch(function(error){
    console.log(error);
})

let detalle = document.querySelector(".detalle")
    detalle.style.display= "none" 
 let ocultar= document.querySelector(".ocultar")
        ocultar.style.display= "none"


    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let resultado = queryStringObj.get("id");
    console.log(resultado);

fetch(`https://dummyjson.com/products/${resultado}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let prod = document.querySelector(".div-product")
    
    let descripcion= ""
     descripcion = descripcion + `<article class= "fetch1">


        <img class="campera-category" src="${data.images}">
          <p class="title"><strong>Producto:</strong>${data.title}</a>
          <p class="description"><strong>Descripcion:</strong>${data.description} </p>
          <p class="precio"><strong>Precio:</strong>${data.price} </p>
          <p class="marca"><strong>Marca:</strong>${data.brand} </p>
          <p class="categoria"><strong>Categoria:</strong>${data.category} </p>
          <p class="stock"><strong>Stock:</strong>${data.stock} </p>
          <p class="tags"><strong>Tags:</strong>${data.tags} </p>
        </article>

        `
    prod.innerHTML= descripcion


        let reviewsA = document.querySelector(".reviews")
       
        let reviewsB = ""

            for(let i=0; i<data.reviews.length; i++){
                   reviewsB = reviewsB + `
            <article class="fetch2">
                <h3>Reviews:</h3>
                <p class="reviews"><strong>Rating:</strong>${data.reviews[i].rating} </p>
                <p class="reviews"><strong>Comentario:</strong>${data.reviews[i].comment} </p>
                <p class="reviews"><strong>Fecha:</strong>${data.reviews[i].date} </p>
                <p class="reviews"><strong>Usuario:</strong>${data.reviews[i].reviewerName} </p>
            </article>`
            }
         
        
        reviewsA.innerHTML = reviewsB
    }
     ) 
    
.catch(function(error){
    console.log(error)
})