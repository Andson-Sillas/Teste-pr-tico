//Algorítmo de busca binária


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

    return -1; // Retorna -1 se o elemento não for encontrado
}

// Exemplo de uso:
const sortedArr = [11, 12, 22, 25, 64];
const target = 22;
const resultIndex = binarySearch(sortedArr, target);

if (resultIndex !== -1) {
    console.log(`O elemento ${target} está na posição ${resultIndex}.`);
} else {
    console.log(`O elemento ${target} não foi encontrado.`);
}
