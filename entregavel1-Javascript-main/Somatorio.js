
const numeros = [1,2]; //Defina os números 

const resultado = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(resultado);
