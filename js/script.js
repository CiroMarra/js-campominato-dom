//Consegna
//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
//Bonus
//Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
//- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
//- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

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



  

    




    



