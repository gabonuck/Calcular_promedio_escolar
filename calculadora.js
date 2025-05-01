function generarCampos() {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const contenedor = document.getElementById("contenedorInputs");
  const botonpro = document.getElementById("Botonpromedio");

  contenedor.innerHTML = ""; // Limpia campos anteriores
  botonpro.innerHTML = "";

  if (isNaN(cantidad) || cantidad < 1) {
    alert("Por favor, ingresa una cantidad válida.");
    return;
  }

  for (let i = 1; i <= cantidad; i++) {
    const campoHTML = `
      <div style="margin-bottom: 16px;">
        <label>Calificación ${i}:</label>
        <input type="number" id="nota${i}" step="any" min="0" max="100" required>

        <label>Valor en porcentaje %:</label>
        <input type="number" id="peso${i}" step="any" min="0" max="100" required>
      </div>
    `;
    contenedor.innerHTML += campoHTML;
  }

  botonpro.innerHTML = `<button onclick="calcularPromedio()">Calcular Promedio</button>`;
}

function calcularPromedio() {
  const cantidad = parseInt(document.getElementById("cantidad").value);
  let total = 0;
  let sumaPesos = 0;

  for (let i = 1; i <= cantidad; i++) {
    const nota = parseFloat(document.getElementById(`nota${i}`).value);
    const peso = parseFloat(document.getElementById(`peso${i}`).value);

    if (!isNaN(nota) && !isNaN(peso)) {
      total += nota * peso;
      sumaPesos += peso;
    }
  }

  const resultado = document.getElementById("resultado");

  if (sumaPesos > 0) {
    const promedio = total / sumaPesos;
    resultado.textContent = `Tu promedio es: ${promedio.toFixed(2)}`;
    resultado.style.color = "#27ae60";
  } else {
    resultado.textContent = "Por favor, completa todos los campos correctamente.";
    resultado.style.color = "#e74c3c";
  }
}
