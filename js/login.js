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

let form = document.querySelector(".div-login");
let email = document.querySelector("#email");
let contraseña = document.querySelector("#contraseña")

let errorEmail = document.querySelector(".emailE");
let errorContraseña = document.querySelector(".contraseñaE")

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



