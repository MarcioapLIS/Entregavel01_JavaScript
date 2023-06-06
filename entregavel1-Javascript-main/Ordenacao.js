function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    var pivo = arr[0];
    var esquerda = [];
    var direita = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivo) {
        esquerda.push(arr[i]);
      } else {
        direita.push(arr[i]);
      }
    }
    return quicksort(esquerda).concat(pivo, quicksort(direita));
  }
  const arr = [5, 3, 7, 2, 8, 4];
  console.log(quicksort(arr)); // saída: [2, 3, 4, 5, 7, 8]