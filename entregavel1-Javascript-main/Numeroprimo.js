
function primo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  var numero = 10;
  
  if (primo(numero)) {
    console.log(`${numero} é primo`);
  } else {
    console.log(`${numero} não é primo`);
  }
  