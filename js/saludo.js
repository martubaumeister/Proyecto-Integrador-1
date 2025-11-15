let mailUser = localStorage.getItem("emailUsuario");

if(mailUser == True){
    let register = document.querySelector(".lista-register");
    let login = document.querySelector(".lista-login");
    let bienvenida = document.querySelector(".bienvenida");

    register.style.display = "none"; 
    login.style.display = "none"; 

    bienvenida.innerHTML = `Bienvenido: ${mailUser} <a href="" class='logout'>Log Out </a>`
}; 
