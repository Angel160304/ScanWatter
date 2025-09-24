// ===== VALIDACIÓN DE EMAIL =====
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ===== VALIDACIÓN DE CONTRASEÑA =====
// Al menos 8 caracteres, una mayúscula, una minúscula, un número y un símbolo
function validarPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

// ===== FUNCIONES DE REGISTRO Y LOGIN =====
document.addEventListener("DOMContentLoaded", () => {

  // ===== REGISTRO =====
  const registroForm = document.querySelector("#registroForm");
  if (registroForm) {
    registroForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.querySelector("#regEmail").value.trim();
      const pass = document.querySelector("#regPassword").value.trim();
      const confirmPass = document.querySelector("#regConfirm").value.trim();

      if (!validarEmail(email)) {
        alert("El correo no es válido");
        return;
      }

      if (!validarPassword(pass)) {
        alert("La contraseña debe tener mínimo 8 caracteres, incluir mayúsculas, minúsculas, números y un carácter especial.");
        return;
      }

      if (pass !== confirmPass) {
        alert("Las contraseñas no coinciden");
        return;
      }

      // ===== LLAMADA AL BACKEND PARA REGISTRO =====
      fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(pass)}`
      })
      .then(res => res.text())
      .then(data => {
        if (data.startsWith("Error")) {
          alert(data);
        } else {
          alert("Registro exitoso: " + data);
          window.location.href = "login.html"; // redirige al login
        }
      })
      .catch(err => alert("Error al registrar: " + err));
    });
  }

  // ===== LOGIN =====
  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.querySelector("#logEmail").value.trim();
      const pass = document.querySelector("#logPassword").value.trim();

      if (!validarEmail(email)) {
        alert("El correo no es válido");
        return;
      }

      if (pass.length < 6) {
        alert("La contraseña es demasiado corta");
        return;
      }

      // ===== LLAMADA AL BACKEND PARA LOGIN =====
      fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `email=${encodeURIComponent(email)}`
      })
      .then(res => res.text())
      .then(data => {
        if (data.startsWith("Error")) {
          alert(data);
        } else {
          alert("Inicio de sesión exitoso: " + data);
          window.location.href = "index.html"; // redirige a la página principal
        }
      })
      .catch(err => alert("Error al iniciar sesión: " + err));
    });
  }
});
