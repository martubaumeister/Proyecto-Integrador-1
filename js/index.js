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