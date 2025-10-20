// Lista di parole di 5 lettere (Corretta e ampliata)
const wordsList = [
    "acqua",  "agire", "aiuto",  "album", "altro",
     "amare", "amico", "amore",  "anima", "animo",
     "apnea", "aprire",  "arido", "aroma", 
    "atomo", "atrio","audio",  "avere",
    "bacio",  "ballo", "banca", "barca", "basso", "basta",
    "bello",  "bocca", "bolla", "bonus", "borsa", "bosco", "botte",
    "brani", "brano", "bravo", "busta", "cacao", "caffè",  "caldo",
    "calma", "calmo", "calza",  "campo",  "canto",
     "capra", "carne", "carro", "carta",  "cassa",
    "casto", "causa",  "cento", "ceppo", "cerca", "certo", "cervo", "cesta",
     "cesto", "chela", "ciclo",
     "cifra", "cigno", "cinta", "circa", "circo", "cisti", "citta",
     "clima", "colla", "colle", "collo", "colmo", "colpa",
    "colpo", "combo", "conto", "coppa", "corpo", "corsa", "corso",
    "costa", "costo", "cotta", "cotto", "crema", "crepa",  "crisi",
    "croce", "crudo",  "cuoio", "cuore",  "curva", "curvo",
    "danno", "danza", "dente", "denso", "detto",
    "dieci", "dieta", "disco","dolce", "dolci", "donna",
    "donne",  "dorso", "dosso",  "drama", "drago",
    "dubbi",  "duomo", "duro", "ebano",  "epoca", 
    "etica", "etico", "evade", "evento", "evita", "fatto",
    "erede", "eroe", "esame", "esca",  "estro",  "etnia",
    "fauna", "extra", "fango", "fante",  "farsa", "fasce",
    "fatto",  "felce", "feria", "ferma", "fermo",
    "ferro", "festa", "fiaba", "fibra", "fiera", "figli",
     "fiume", "fiore", "firma", "fisso", "fobia", "fogna", "fogno",
    "folla", "fondo", "fonte", "forma", "forno", "forse", "forte",
    "forum", "forza", "fossa", "fosso", "frase", "frate", "freno",
     "frigo",  "fuoco", "furia", "furto", 
    "gabbo",  "gallo", "gamba", "gamma",  "gatto",
    "gemme", "gente", "gesto", "getto", "ghiro", "giara", "gioco", "gioia",
     "giuda", "giudo", "giuro", 
    "gomma", "gotta", "grado", "grana", "grano", "grata", "grave", "greco",
    "grido", "grigi", "grifo", "grumo", "guida",  "gusto", "hotel",
    "invio", "iride", "isola", "kappa", "koala",  "laico", "lancia",
    "lampo", "lardo", "largo", "larva", "latte",
    "legge", "legno", "lente", "lento", "lepre",  "letto", 
     "libro", "lieve", "lieto", "linea", "lista",
    "litio",  "lombo", "lordo",  "lotta", "lotto",
     "lucro",  "lungo", "lupo", "lutto", "lusso",
    "macro", "madre", "mafia", "magia",  "magma", "magro", "malga",
    "malta", "mamma", "manca", "mando", "mango",  "manto", "mappa",
    "marca",  "marmo", "massa", "matto", "mazza", "mazzo", "media",
    "medio",  "melma", "mensa", "mente", "mento",
     "merce", "mese", "messa", "messo", "metro", "mezzo",
    "miele","mirra", "misto",
     "mogio",  "molla", "molto", "mondo", "monte",
     "morte", "morso", "mossa", "mosso", "mosto", "motel", 
     "mucca", "muffa",  "museo", 
     "nervo", "nonna", "nonno", "norma",
    "notte", "nube",  "nulla", "nuoto", "nuovo",
    "odore", "oggi", "ombra", "oncia",  "onere", "opera",
     "ostia","ovale", "ovest", "pacco", 
    "padre", "paese", "palla", "palma", "palmo",  "panca", 
    "panna", "panno", "paolo",  "parco",  "parte",
    "passo", "pasta", "pasto", "patto", "pausa", "pazzo", "pecca", 
    "penna", "pensa",  "perno", "pesca",
    "peste", "petto", "pezza", "pezzo", "piano", "piede", "piega",
    "pieno", "pieta", "pieve", "pigna", 
    "pista", "pizza", "pizzo", "poeta", 
    "pollo", "polso", "pompa", "ponte", "porto",
    "posto", "pozzo", "prato", "prato", "prete", "prima", "primo", "prova",
    "pulce", "pugno", "punta", "punto", "purga", "quasi", "quota", "radio",
    "ragno", "rango", "razza", "razzo", "reale", "reame",
    "regia", "regno",  "resto", "retta",
    "ricco", "rombo",  "rosso", "rospo", "rotta", "rotto", "rozza",
    "rugby", "ruolo", "ruota", "ruspa", "sacco",
     "saldo", "salto", "salvo", "santo", "sardo", "sasso",
    "scala", "scafo", "scena", "scemo",  "scopa", "scopo", "scudo",
    "secco", "sede", "sedia", "segno", "selva", "senso", 
    "serie", "serio", "serra", "servo", "sesso",
    "setta", "sfera", "sfida", "sidro", "sigla",  "socio", 
    "sogna", "sogno", "soldo", "somma", "sommo",
    "sonda", "sonno", "sopra", "sordo", "sorta", "sorte", "sosia", "sosta",
    "sotto", "spada", "spago", "spesa", "spiga", "spina", "sposa",
    "sposo", "sport", "staff",  "stelo",
    "stile", "stima", "stiva", "stufa", "succo", "suino", "suolo",
    "suono", "super",  "taiga", "talco", "tango",
    "tappa", "tardi", "targa", "tasca", "tassa", "tasso", "tasto", "tatto",
    "tazza",  "tempo", "tenda", "tenia", "tenta", "terme",
    "terra", "terzo",  "testa", "testo", "tetto", "tiara",
    "tifo", "tigre",  "tinta", "tocca",  "tondo",
    "tonno",  "toppa", "torba", "tordo",  "torre", "torta",
    "torvo", "tosse", "tosto", "totem", "trama", "trave", "treno", "tribu",
    "trota", "tuffo", "tubo", "tuono", "turbo", "turco", "turno",
    "tutto", "udito",  "uscio",
    "vacca",  "valle", "vampa", "vanga", "vanto", "varco",
    "vario", "vasca",  "vasto",  "vento",
    "verde", "verme", "verso", "vetro", "vetta", "vezzo", "video", "vigna",
    "villa", "vinto", "viola", "virus",  "visto", "vista", "vita",
     "vizio",  "volta",
    "volto", "vuoto", "yacht", "zaino", "zampa", "zanna", "zappa",
    "zebra", "zecca", "zinco", "zitta", "zitto",
    "zolla", "zoppo", "zucca", "zuffa", "zuppa"
];

// Variabili di stato del gioco
let secretWord = "";
const maxAttempts = 6;
let attempts = 0;
let allAbsentLetters = new Set();

// Riferimenti agli elementi DOM
const welcomeMsg = document.getElementById("welcome-message");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const resultsArea = document.getElementById("results-area");
const correctPosMsg = document.getElementById("correct-pos");
const presentPosMsg = document.getElementById("present-pos");
const absentLettersMsg = document.getElementById("absent-letters");
const allAbsentMsg = document.getElementById("all-absent");
const messageEl = document.getElementById("message");
const finalWordEl = document.getElementById("final-word");

// Funzione per avviare/riavviare il gioco
function startGame() {
    // Scelta casuale di una parola dalla lista
    secretWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    
    // Reset delle variabili di stato
    attempts = 0;
    allAbsentLetters.clear();
    
    // Reset dell'interfaccia
    welcomeMsg.textContent = `Benvenuto nel gioco! Devi indovinare una parola di 5 lettere. Hai un massimo di ${maxAttempts} tentativi.`;
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;
    resultsArea.style.display = "none";
    messageEl.textContent = "";
    messageEl.className = "";
    finalWordEl.textContent = "";
    
    // Aggiungi un listener per il tasto "Invio"
    guessInput.addEventListener("keyup", handleKeyPress);
    guessButton.addEventListener("click", handleGuess);
}

// Funzione per gestire la pressione del tasto Invio
function handleKeyPress(event) {
    if (event.key === "Enter") {
        handleGuess();
    }
}

// Funzione per verificare la parola inserita
function checkWord(guess, secret) {
    let correctPositions = ['_', '_', '_', '_', '_'];
    let presentButWrongPosition = [];
    let absentLetters = [];

    // Verifica delle lettere in posizione corretta
    for (let i = 0; i < 5; i++) {
        if (guess[i] === secret[i]) {
            correctPositions[i] = guess[i];
        }
    }
    
    // Verifica delle lettere presenti ma in posizione sbagliata o assenti
    for (let i = 0; i < 5; i++) {
        if (guess[i] !== secret[i]) {
            if (secret.includes(guess[i])) {
                presentButWrongPosition.push(guess[i]);
            } else {
                absentLetters.push(guess[i]);
            }
        }
    }

    return { correctPositions, presentButWrongPosition, absentLetters };
}

// Funzione per gestire il tentativo dell'utente
function handleGuess() {
    const guess = guessInput.value.toLowerCase().trim();

    // Validazione 1: Lunghezza
    if (guess.length !== 5) {
        messageEl.textContent = "La parola deve essere di 5 lettere.";
        messageEl.className = "error";
        return;
    }

    // Se la parola ha 5 lettere, puliamo eventuali messaggi di errore precedenti
    messageEl.textContent = "";
    messageEl.className = "";

    // Esegui l'analisi della parola
    const { correctPositions, presentButWrongPosition, absentLetters } = checkWord(guess, secretWord);
    
    // Aggiungi le lettere assenti al set globale
    absentLetters.forEach(letter => allAbsentLetters.add(letter));

    // Mostra i risultati
    resultsArea.style.display = "block";
    correctPosMsg.textContent = "Posizioni corrette: " + correctPositions.join(' ');
    presentPosMsg.textContent = "Lettere presenti ma in posizione sbagliata: " + [...new Set(presentButWrongPosition)].join(', ');
    absentLettersMsg.textContent = "Lettere assenti: " + [...new Set(absentLetters)].join(', ');
    allAbsentMsg.textContent = "Tutte le lettere assenti: " + [...allAbsentLetters].sort().join(', ');

    // Incrementa i tentativi e pulisci l'input
    attempts++;
    guessInput.value = "";

    // Controlla la vittoria
    if (guess === secretWord) {
        messageEl.textContent = "Congratulazioni! Hai indovinato la parola!";
        messageEl.className = "success";
        endGame();
        return;
    }

    // Controlla la sconfitta
    if (attempts >= maxAttempts) {
        messageEl.textContent = "Mi dispiace, hai esaurito i tentativi.";
        messageEl.className = "error";
        finalWordEl.textContent = `La parola era '${secretWord}'.`;
        endGame();
        return;
    }
    
    // Aggiorna il messaggio dei tentativi
    welcomeMsg.textContent = `Tentativo ${attempts + 1} di ${maxAttempts}.`;
}

// Funzione per terminare il gioco
function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    guessInput.removeEventListener("keyup", handleKeyPress);
}

// Avvia il gioco quando la pagina è caricata
document.addEventListener("DOMContentLoaded", startGame);