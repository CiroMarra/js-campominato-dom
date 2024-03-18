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

// Funzione che serve a creare una sola griglia di gioco con dieci caselle e dieci righe
function generateGrid() {
    const mainGrid = document.getElementById('grid');
    mainGrid.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
        const newSquare = generateSquare(i);
        mainGrid.append(newSquare);
    }
}

// funzione che genera dei div con una serie di classi al cui interno viene stampato un numero.
function generateSquare(number) {
    // crea il div 
    const newSquare = document.createElement('div');
    // assegna la classe 'square' al div
        newSquare.classList.add('square');
        // assegna all'interno dei div appena creato uno span con l'interno il numero del div
        newSquare.innerHTML = `<span>${number}</span>`;
       
// crea una funziona con evento "click" - il player può decidere di cliccare su una casella numerata e il colore al suo interno cambia
     newSquare.addEventListener('click', function() {
        if(number) {
           // aggiunge, al momento del click sulla casella la classe "color" che serve a colorare la casella scelta dal player di azzurro.
            this.classList.toggle('color');
            // console a cui interno viene stampato un messagio con "Il player ha cliccato:" assieme al numero della casella.
            console.log(`Il player ha cliccato: ${number}`);
        } 
    })

    return newSquare;

    };
    // crea una funzione che serve a resettare completamente la griglia facendola scomparire.
    function resetGrid() {
        grid.innerHTML = '';
    
    }



  

    




    



