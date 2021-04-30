// Chiedere all' utente di scegliere tra pari o dispari
var userChoice = prompt(" Scegli 'pari' o 'dispari'");
document.writeln("Hai scelto " + userChoice + "<br>");

// Chiedere all' utente di inserire un numero compreso tra 1 e 5
var userNumber = Number(prompt("Scegli un numero tra 1 e 5")) ;
document.writeln( `Il tuo numero è ${userNumber} <br>`);

// Generare un numero casuale compreso tra 1 e 5 tramite una funzione
/**
 * ### Genera un numero casuale 1 => x <=5
 */
function randomNumber() {
    
    return Math.floor((Math.random() * 5) + 1);
}
var random = randomNumber()
document.writeln("Il numero casuale è " + random + "<br>");

// Sommare il numero dell' utente con quello genrato casualmente e verificare se il risultato è pari o dispari
/**
 * ### Verifica se la somma di due numeri è "pari" o "dispari"
 * @param {number} num1
 * @param {number} num2
 * @return "pari" o "dispari" 
 */
function verificaPari(num1, num2) {
    var sum = num1 + num2;
    if (sum % 2 === 0) {

        return "pari";
    }
    return "dispari";
}

// Comunicare all' utente il risultato
var esito = verificaPari(userNumber, random)
document.writeln("La somma dei numeri è " +(userNumber + random) + "<br>")
if (esito === userChoice) {
    document.writeln("Complimenti! Hai vinto");
} else {
    document.writeln("Mi dispiace, ritenta!");
}