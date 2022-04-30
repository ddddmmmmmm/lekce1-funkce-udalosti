// tady je místo pro náš program

/**
 * Zobrazí výsledek sečtení dvou čísel. Na sečtení se využívá interní funkce.
 * 
 * @param {string} selector
 * @param {int} a 
 * @param {int} b 
 */
function zobrazVysledek(selector, a, b) {
  document.querySelector(selector).innerHTML = secti(a, b);
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 * 
 * @param {int} a 
 * @param {int} b 
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert('Gratulace, právě si spustila tuto funkci!');
  console.log('Gratulace, právě si spustila tuto funkci!');

  let squareElement = document.getElementsByClassName('ctverecek')[0]
  squareElement.innerHTML = 'Gratulace, právě si spustila tuto funkci!';
  // délka řetězce a šířkou elementu
  squareElement.style.width = '400px';
}

/**
 * Upraví barvu pozadí předaného prvku
 * 
 * @param {string} elementSelector 
 */
function upravBarvu(elementSelector) {
  document.querySelector(elementSelector).style.backgroundColor = 'green';

}

