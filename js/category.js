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

let cajaCat = document.querySelector(".tarjetas-cat");
cajaCat.style.display= "none"
let chau= document.querySelector(".chau")
chau.style.display="none"


let queryString = location.search;
let qsObj = new URLSearchParams(queryString);    
let categoria = qsObj.get("category");

fetch(`https://dummyjson.com/products/categories/${categoria}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)

    let conten= document.querySelector(".contenido-cat")

    categoria= 
        `<article class="tarjeta-cat">
            <div class="imagen-cat">
                <img src="${data.products}" alt="producto">
            </div>
            <p class="titulo">${data.products.title}</p>
            <p class="precio">${data.products.price}</p>
            <a class="boton" href="product.html">Ver detalle</a>
        </article>
        `
        conten.innerHTML= categoria
    
})
      

.catch(function(error){
    console.log(error)
    })

    