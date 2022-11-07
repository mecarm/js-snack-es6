/*
Snack 1
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4
*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let array;
myArray.forEach((index) => {
     array = myArray.slice(1,4);
});

console.log(array);

const newArray = myArray.filter((element, index) => { // filtra element(elementi) e indice (index) dentro myarray:
    if(index > 0 && index < 4){ //se l'indice (posizione) è maggiore di zero e indice minore di 4 :
        return true; // ritorna true ( e quindi li filtra in array)
    }
    else{
        return false;
    }

});
console.log(newArray);