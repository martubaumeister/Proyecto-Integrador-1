let mailUser = localStorage.getItem("emailUsuario");
let logout = document.querySelector(".logout");
logout.style.display = "none";

if(mailUser){
    let register = document.querySelector(".lista-register");
    let login = document.querySelector(".lista-login");
    

    register.style.display = "none"; 
    login.style.display = "none"; 
    logout.style.display= "block";

    bienvenida.innerHTML = `Bienvenido: ${mailUser}` + bienvenida.innerHTML ;
}; 
console.log(logout)

logout.addEventListener('click', function(event){
    localStorage.clear();
    bienvenida.style.display = "none";
    register.style.display = "block";
    login.style.display = "block";
    logout.style.display = "none";
})
console.log(localStorage);
bienvenida.style.display = "block"