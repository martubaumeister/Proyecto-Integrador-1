fetch('https://dummyjson.com/products/category-list')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let category= document.querySelector(".category")
    category.innerHTML= data
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
    let detalle = document.querySelector(".detalle")
    detalle.style.display= "none" 
    let prod = document.querySelector(".div-product")
    
    let descripcion= ""
   
    for (let i=0; i<data.products.length;i++){
             descripcion = descripcion + `<article class= "articulo">
          <p class="title" href="./products.html?id=${data.products[i].title}">Producto:${data.products[i].title}</a>
          <p class="description">Descripcion:${data.products[i].description} </p>
          <p class="precio">Precio:${data.products[i].price} </p>
          <p class="marca">Marca:${data.products[i].brand} </p>
          <p class="categoria">Categoria:${data.products[i].category} </p>
          <p class="stock">Stock:${data.products[i].stock} </p>
          <p class="tags">Tags:${data.products[i].tags} </p>
        </article>`
        }
    prod.innerHTML= descripcion

    let ocultar = document.querySelector(".ocultar")
    ocultar.style.display= "none" 
    let reviews = document.querySelector(".reviews")
    let criticas= ""
   
    for (let i=0; i<data.reviews.length;i++){
             criticas = criticas + `
             <article class= "articulo">
          <p class="rate" href="./products.html?id=${data.reviews[i].rating}">Rating:${data.reviews[i].rating}</a>
          <p class="comment">Comentario:${data.reviews[i].comment} </p>
          <p class="date">Fecha:${data.reviews[i].date} </p>
          <p class="usuario">Usuario:${data.reviews[i].reviewerName} </p>
        </article>`;
        }
    reviews.innerHTML= criticas

})
.catch(function(error){
    console.log(error)
})