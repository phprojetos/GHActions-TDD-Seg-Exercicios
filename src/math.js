function fatorial(n) {
  n = Number(n);
  if (typeof n !== 'number' || isNaN(n)) {
      throw new TypeError("O argumento deve ser um número válido");
  }
  if (n < 0) {
      throw new Error("Não existe fatorial de número negativo");
  }
  if (n === 0) {
      return 1;
  }
  return n * fatorial(n - 1);
}

function fibonacci(n) {
  n = Number(n);
  if (typeof n !== 'number') {
    throw new TypeError("O argumento deve ser um número válido");
}
if (n <= 0) {
    throw new Error("Não existe fibonnacci de número menor ou igual a zero");
}
if (n === 1) {
    return 1;
}
if (n === 2) {
    return 1;
}
return fibonacci(n - 1) + fibonacci(n - 2);
}
function ehPrimo(n) {
  n = Number(n);
  if (typeof n !== 'number' || isNaN(n)) {
      throw new TypeError("O argumento deve ser um número válido");
  }
  if (n <= 1) {
      throw new Error("Não número primo de número menor ou igual a 1");
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }
  return true;
}

module.exports = {
  fatorial,
  fibonacci,
  ehPrimo
}
