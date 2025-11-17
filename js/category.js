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





fetch('https://dummyjson.com/products/categories')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    let category= document.querySelector(".tarjetas-cat")
    category.style.display= "none"

    let prendas_cat= document.querySelector(".contenido-cat")
    prendas= ""
    for (let i=0; i<data.length;i++){
    prendas= prendas + ` 
    <article class="tarjeta-home">
        <p class="titulo">${data[i].name}</p>
        <a href=""></a>
         </article>`
    
    prendas_cat.innerHTML= prendas + `<p> FALTA CONECTAR EL URL </p>`
    }
})
.catch(function(error){
    console.log(error)
})