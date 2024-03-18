document.getElementById('buscaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numerosInput = document.getElementById('numerosInput').value;
    const alvo = Number(document.getElementById('alvoInput').value);
    const numerosArray = numerosInput.split(',').map(Number);
    const indice = binarySearch(numerosArray, alvo);
    if (indice !== -1) {
      document.getElementById('resultado').innerText = `O elemento ${alvo} está na posição ${indice}.`;
    } else {
      document.getElementById('resultado').innerText = `O elemento ${alvo} não foi encontrado.`;
    }
  });
  
  function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length - 1;
  
      while (left <= right) {
          let mid = Math.floor((left + right) / 2);
  
          if (arr[mid] === target) {
              return mid;
          } else if (arr[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  
      return -1;
  }
  