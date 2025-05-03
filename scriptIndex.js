// Función para alternar visibilidad de la contraseña
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleIcon = document.getElementById('toggleIcon');

  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';

  toggleIcon.src = isPassword ? 'Imagenes/ojo.png' : 'Imagenes/ojocerrado.png';
}

// Credenciales provisionales
const userEmail = "admin@correo.com";
const userPassword = "123456";

// Validación de inicio de sesión
document.getElementById("submit").addEventListener("click", function () {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === userEmail && password === userPassword) {
    // Credenciales correctas → redirige
    window.location.href = "Principal.html";
  } else {
    alert("Correo o contraseña incorrectos.");
  }
});




  
  