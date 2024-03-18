//Consegna
//Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ e /img con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
//BONUS:
//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
//- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
//- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// crea una costante per far si che venga creata una griglia di gioco.
const startGame = document.getElementById('startGame');
// crea una costante con cui il player può far scomparire la griglia di gioco
const resetGame = document.getElementById('reset');
// crea la griglia dopo il click da parte del player sul pulsante "StartGame"
startGame.addEventListener('click', generateGrid);
// fa scomparire del tutto la griglia dopo il click da parte del player sul pulsante "Reset"
resetGame.addEventListener('click', resetGrid);

const bombs = []; 
const bombsArray = [];

const grid = 100; 
let bombCount = 16;


// Funzione che serve a creare la griglia di gioco 
function generateGrid() {
    const mainGrid = document.getElementById('grid');
    mainGrid.innerHTML = '';
    bombCount = generateBombs();
    
    for (let i = 1; i <= grid; i++) {
        const newSquare = generateSquare(i);
        mainGrid.append(newSquare);
    }
}
// funzione hce serve a generare le bombe - V
function generateBombs() {
    while (bombsArray.length < bombCount) {
        const random = Math.floor(Math.random() * grid) + 1;
        if (!bombsArray.includes(random)) {
            bombsArray.push(random);
            bombs.push(random); // aggiunge le bombe generate
        }
    }
    console.log(bombsArray)
    // segna il numero di bombe generate
}

let score = [];
// funzione che genera dei div con una serie di classi al cui interno viene stampato un numero.
function generateSquare(number) {
    // crea il div 
    const newSquare = document.createElement('div');
    // assegna la classe 'square' al div
        newSquare.classList.add('square');
        // assegna all'interno dei div appena creato uno span con l'interno il numero del div
        newSquare.innerHTML = `<span>${number}</span>`;

       
// crea una funziona con evento "click" se la cella contiene una bomba la cella si colora di rosso se invece non contiene una bomba la cella si colora di azzurro
    newSquare.addEventListener('click', function() {

        if (bombs.includes(number)) {
            // La cella è una bomba
            this.classList.add('bomb');
            endGame(false);
        } else {
      
            score.push(number);
            console.log(score.length)
            // La cella non è una bomba
            this.classList.add('color');
            winner();
        }
    });

 

    return newSquare;

};

    // crea una funzione che serve a determinare se il giocatore ha perso
function endGame(win) {
    const mainGrid = document.getElementById('grid');
    const squares = mainGrid.querySelectorAll('.square');
    console.log(squares)
    for (let i = 0; i < squares.length; i++) {
        const square = squares[i];
        if (!square.classList.contains('bomb')) {
            square.classList.add('color');
        }
    }

    if (win) {
        alert('hai vinto il tuo punteggio è: ' + score.length);
    } else {
        alert('hai perso il tuo punteggio è: ' + score.length);
    }
}

    // crea una funzione che serve a determinate le condizioni di vittoria per il giocatore
function winner() {
    const colorSquare = document.querySelectorAll('.color');
    const remainSquare = grid - colorSquare.length; 
    if (remainSquare === bombCount) {
        endGame(true); 
    }
}


   

    // crea una funzione che serve a resettare completamente la griglia facendola scomparire.
    function resetGrid() {
        grid.innerHTML = '';
    
    }
