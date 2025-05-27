document.addEventListener("DOMContentLoaded", () => {
  const numeroDoc = document.getElementById("numero-doc");
  const celular = document.getElementById("celular");
  const correo = document.getElementById("correo");

  const errorNumeroDoc = document.getElementById("error-numero-doc");
  const errorCelular = document.getElementById("error-celular");
  const errorCorreo = document.getElementById("error-correo");

  const regexNumeros = /^\d+$/;
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Función genérica para mostrar error
  function mostrarError(input, errorDiv, mensaje) {
    input.classList.add("is-invalid");
    errorDiv.textContent = mensaje;
  }

  function limpiarError(input, errorDiv) {
    input.classList.remove("is-invalid");
    errorDiv.textContent = "";
  }

  // Validación en tiempo real
  numeroDoc.addEventListener("input", () => {
    const valor = numeroDoc.value.trim();
    if (!regexNumeros.test(valor)) {
      mostrarError(numeroDoc, errorNumeroDoc, "Solo se permiten números.");
    } else if (valor.length > 11) {
      mostrarError(numeroDoc, errorNumeroDoc, "Máximo 11 dígitos.");
    } else {
      limpiarError(numeroDoc, errorNumeroDoc);
    }
  });

  celular.addEventListener("input", () => {
    const valor = celular.value.trim();
    if (!regexNumeros.test(valor)) {
      mostrarError(celular, errorCelular, "Solo se permiten números.");
    } else if (valor.length > 9) {
      mostrarError(celular, errorCelular, "Máximo 9 dígitos.");
    } else {
      limpiarError(celular, errorCelular);
    }
  });

  correo.addEventListener("input", () => {
    const valor = correo.value.trim();
    if (!regexCorreo.test(valor)) {
      mostrarError(correo, errorCorreo, "Correo no válido.");
    } else {
      limpiarError(correo, errorCorreo);
    }
  });
});
