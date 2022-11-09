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

const newArray = myArray.filter((element, index) => {
    if(index > 0 && index < 4){ 
        return true; 
    }
});
console.log(newArray);

/*
Snack 2
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
  ];

const targhe = students.map((element) => { 
    return element.name.toUpperCase();
});



console.log(targhe);

const studentiPremiati = students.filter((element) => {
    if(element.grades >= 70){
        return true;
    }
});

console.log(studentiPremiati);

const studentiIdSuperiore = students.filter((element) => {
    if(element.grades >= 70 && element.id >= 120){
        return true;
    }
});

console.log(studentiIdSuperiore);


/*
Snack 3
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/
const bici = [
    {
        nome: 'Colnago',
        peso: 18
    },
    {
        nome: 'Mountain Bike',
        peso: 26
    },
    {
        nome: 'Run Bike',
        peso: 12
    }
];

// 
// console.log(biciLeggera);

let min = Math.min(...bici.map((element) => {
    return element.peso
}));
/*
VERSIONE SHORT
let min = Math.min(...bici.map(element => element.peso)); 
*/

console.log(min)

//Versione corretta con quello spiegato a lezione :
let biciLeggera = bici[0]; //oggetto che mi serve per poter fare un confronto con le altre tramite la condizione if

for ( let i = 0; i < bici.length; i++ ) {

    let elementoCorrente = bici[i];
    let { peso } = elementoCorrente;

    if ( peso < biciLeggera.peso ){
        biciLeggera = elementoCorrente;
    }
};

console.log( biciLeggera );
/*
<--------------------------------------------------------------------------------------->
Snack4
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
    {
        nome: 'Napoli',
        punti: 0,
        fouls: 0
    },
    {
        nome: 'Milan',
        punti: 0,
        fouls: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        fouls: 0
    },
    {
        nome: 'Atalanta',
        punti: 0,
        fouls: 0
    },
    {
        nome: 'Bologna',
        punti: 0,
        fouls: 0
    },
]
//Genero una funzione che mi ritorna dei numeri random quando viene invocata
function randomNumber(min,max){
    return Math.floor(Math.random()* max - min + 1)+min;
}
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
squadre.forEach((element) => {
    return element.punti = randomNumber(1,50), element.fouls = randomNumber(1,30);
})
console.log(squadre);

// destrutturazione
squadre.forEach(({nome, fouls},index) =>{
    console.log(nome, fouls);
})