function fibo(numero) {
    if (numero <= 1) {
      return numero;
    }
  
    return fibo(numero - 1) + fibo(numero - 2);
  }
  const numero = 100;
  
  for (let i = 0; i < numero; i++) {
    console.log(fibo(i));
  }
  