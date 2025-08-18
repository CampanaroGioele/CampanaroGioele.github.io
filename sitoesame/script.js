
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username && password) {
        alert("Login effettuato con successo!");
      } else {
        alert("Compila tutti i campi!");
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