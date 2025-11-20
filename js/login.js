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

let form = document.querySelector(".div-login");
let email = document.querySelector("#email");
let contraseña = document.querySelector("#contraseña");

let errorEmail = document.querySelector(".emailE");
let errorContraseña = document.querySelector(".contraseñaE");

let evento = form.addEventListener('submit', function(event){
    event.preventDefault();
    validacion = false; 
    if(email.value == ""){
        errorEmail.innerText = "Este campo no puede estar vacio";
        errorEmail.style.display = "block"; 
        validacion = true; 
    }
    if(contraseña.value == ""){
        errorContraseña.innerText = "Este campo no puede estar vacio";
        errorContraseña.style.display = "block"; 
        validacion = true; 
    }
    if(contraseña.value.length < 6){
        errorContraseña.innerText = "La contraseña debe tener al menos 6 caracteres";
        errorContraseña.style.display = "block";
        validacion = true;
    }

    if(validacion == false){
        localStorage.setItem("emailUsuario", email.value);
        this.submit(); 
    }
});



