// Chiedere all' utente di inserire una parola
var userWord = prompt("inserisci un nome od una frase");

// Crea una funzione per capire se la parola è palindroma
/**
 * ### Verifica se una stringa di testo è palindroma
 * @param { string } testo inserire il testo da esaminare
 * @returns da il valore vero o falso della verifica effettuata
 */
 function verifica_palindromo(testo) {

    var reverseWord = testo.split("").reverse().join("")

    if (reverseWord === testo) {
        return true;
    }
    return false;
 }

 /* FUNZIONE SBAGLIATA */
/* function verifica_palindromo(testo) {
    var splitWord = Array.from(testo);
    var reverseWord = splitWord.reverse();
    if (reverseWord === splitWord ) {
        return true
    }
    return false;
}
console.log(verifica_palindromo(userWord)); */

//Mostra all' utente il risultato della verifica
var esito = verifica_palindromo(userWord)
console.log(esito);
if (esito) {
    document.writeln("Bravo! Il testo da te inserito è palindromo! Infatti " + userWord + " è uguale se letto al contrario!")
    
}else {
    document.writeln("Mi dispiace il testo inserito non è palindromo")
}