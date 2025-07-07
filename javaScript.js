const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputPassword = document.getElementById("contraseña");
const inputConfirmarPassword = document.getElementById("confirmar-contraseña");

const divNombre = document.getElementById("nombre-message");
const divCorreo = document.getElementById("correo-message");
const divPassword = document.getElementById("contraseña-message");
const divConfirmarPassword = document.getElementById(
  "confirmar-contraseña-message"
);

const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]{2,50}$/;
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.\*])[A-Za-z\d@$!%*?&.\*]{8,20}$/;

function obtenerUsuario() {
  const userName = inputNombre.value.trim();
  const userCorreo = inputCorreo.value.trim();
  const userPassword = inputPassword.value.trim();
  const userConfirmarPassword = inputConfirmarPassword.value.trim();
  inputNombre.classList.remove("error", "success");
  if (!regexNombre.test(userName)) {
    divNombre.textContent = "⚠️ Solo se permiten letras en este campo.";
    divNombre.style.display = "block";
    inputNombre.classList.add("error");
  } else {
    divNombre.style.display = "none";
    inputNombre.classList.add("success");
  }

  inputCorreo.classList.remove("error", "success");
  if (!regexCorreo.test(userCorreo)) {
    divCorreo.textContent =
      "⚠️ Formato de correo electrónico inválido (ej. usuario@dominio.com).";
    divCorreo.style.display = "block";
    inputCorreo.classList.add("error");
  } else {
    divCorreo.style.display = "none";
    inputCorreo.classList.add("success");
  }
  inputPassword.classList.remove("error", "success");
  if (!regexPassword.test(userPassword)) {
    divPassword.textContent =
      "⚠️ La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial (@$!%*?&).";
    divPassword.style.display = "block";
    inputPassword.classList.add("error");
  } else {
    divPassword.style.display = "none";
    inputPassword.classList.add("success");
  }
  inputConfirmarPassword.classList.remove("error", "success");
  if (userPassword != userConfirmarPassword) {
    divConfirmarPassword.textContent = "⚠️ Las contraseñas  no coninsiden";
    divConfirmarPassword.style.display = "block";
    inputConfirmarPassword.classList.add("error");
  } else {
    divConfirmarPassword.style.display = "none";
    inputConfirmarPassword.classList.add("success");
  }
}

inputNombre.addEventListener("input", obtenerUsuario);
inputCorreo.addEventListener("input", obtenerUsuario);
inputPassword.addEventListener("input", obtenerUsuario);
inputConfirmarPassword.addEventListener("input", obtenerUsuario);
