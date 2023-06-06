function contarInteiros(primeiroDado, n, conjuntoDeDados) {
    let contador = 0;
    for (let i = 0; i < conjuntoDeDados.length; i++) {
      if (conjuntoDeDados[i] >= primeiroDado && conjuntoDeDados[i] <= n && Number.isInteger(conjuntoDeDados[i])) {
        contador++;
      }
    }
    return contador;
  }
  const primeiroDado = 5;
  const n = 12;
  const conjuntoDeDados = [5, 8, 7, 13, 11, 10, 6];
  console.log(contarInteiros(primeiroDado, n, conjuntoDeDados));