function generarCampos() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const contenedor = document.getElementById("contenedorInputs");
    const botonpro = document.getElementById("Botonpromedio");
  
    contenedor.innerHTML = ""; // Limpia campos anteriores si los hay
    botonpro.innerHTML = "";
  
    for (let i = 1; i <= cantidad; i++) {
      contenedor.innerHTML += `
        <div>
          <label>Calificacion ${i}: <input type="number" id="nota${i}" step="any"></label>
          <label>Valor en porcentaje %: <input type="number" id="peso${i}" step="any"></label>
        </div>
      `;
    }

    botonpro.innerHTML = `<button onclick="calcularPromedio()">Calcular promedio</button>`;
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
  
    if (sumaPesos > 0) {
      const promedio = total / sumaPesos;
      document.getElementById("resultado").innerText = `Tu promedio es: ${promedio.toFixed(2)}`;
    } else {
      document.getElementById("resultado").innerText = "Por favor, completa todos los campos correctamente.";
    }
  } 
