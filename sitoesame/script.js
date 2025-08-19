
document.addEventListener("DOMContentLoaded", () => {
  
  const loginForm = document.getElementById("loginForm");
  const utente1= "pippo";
  const password1= "123";
  const utente2="Anna";
  const password2="abc"; let user= false; let pvd= false;
 alert("prova");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if((username==utente1 )or( username==utente2 ))
      user=true;
      
         if((username==utente1 )&&( password==password1 ))
      pvd=true;
         
       if((username==utente2 )&&( password==password2 ))
      pvd=true;
       
      if (user && pvd)  {
        alert("Login effettuato con successo!");
      } else {
        alert("Utente non registrato");
      }
    });
  }


  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const password = document.getElementById("passwordReg").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const errorMessage = document.getElementById("errorMessage");

      if (password !== confirmPassword) {
        errorMessage.textContent = "Le password non coincidono!";
      } else {
        errorMessage.textContent = "";
        alert("Registrazione completata con successo!");
        registerForm.reset();
      }
    });
  }


});





