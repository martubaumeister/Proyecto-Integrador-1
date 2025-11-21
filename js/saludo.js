let mailUser = localStorage.getItem("emailUsuario");
let logout = document.querySelector(".logout");
logout.style.display = "none";
console.log(logout)
let bienvenida = document.querySelector(".bienvenida");
    let register = document.querySelector(".lista-register");
    let login = document.querySelector(".lista-login");

if(mailUser){
    let bienvenidaTexto = document.querySelector(".text_bienvenida");

    register.style.display = "none"; 
    login.style.display = "none"; 
    logout.style.display= "block";

    bienvenidaTexto.innerText = `Bienvenido: ${mailUser}` ;
}; 

logout.addEventListener('click', function(event){
    localStorage.clear();
    bienvenida.style.display = "none";
    register.style.display = "block";
    login.style.display = "block";
    logout.style.display = "none";
})


console.log(localStorage);
