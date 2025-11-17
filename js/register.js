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

let form = document.querySelector(".form");
let email = document.querySelector("#mail");
let contraseña = document.querySelector("#contraseña")
let recontraseña = document.querySelector("#recontraseña")

let errorEmail = document.querySelector(".emailE");
let errorContraseña = document.querySelector(".contraseñaE");
let errorReContraseña = document.querySelector(".reContra");

let evento = form.addEventListener('submit', function(event){
    event.preventDefault();
    validacion = true; 
    if(email.value == ""){
        errorEmail.innerText = "Este campo no puede estar vacio";
        errorEmail.style.display = "block"; 
        validacion = false; 
    }
    if(contraseña.value == ""){
        errorContraseña.innerText = "Este campo no puede estar vacio";
        errorContraseña.style.display = "block"; 
        validacion = false; 
    }
    if(contraseña.value.length < 6){
        errorContraseña.innerText = "La contraseña debe tener al menos 6 caracteres";
        errorContraseña.style.display = "block";
        validacion = false;
    }
    if(recontraseña.value != contraseña.value){
        errorReContraseña.innerText = "Las contraseñas no coinciden";
        errorReContraseña.style.display = "block";
        validacion = false; 
    }

    if(validacion == true){
        this.submit(); 
    }
});