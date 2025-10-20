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
let keyStatus = {};
let masterCorrectPositions = []; // 1. AGGIUNTA QUESTA RIGA

// Riferimenti agli elementi DOM
// ... (tutti i tuoi riferimenti DOM rimangono invariati)
const welcomeMsg = document.getElementById("welcome-message");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const resultsArea = document.getElementById("results-area");
const correctPosMsg = document.getElementById("correct-pos");
const presentPosMsg = document.getElementById("present-pos");
const absentLettersMsg = document.getElementById("absent-letters");
const messageEl = document.getElementById("message");
const finalWordEl = document.getElementById("final-word");
const playAgainButton = document.getElementById("play-again-button");
const keyboardArea = document.getElementById("keyboard-area");

// Funzione per generare la tastiera
function createKeyboard() {
    // ... (questa funzione rimane invariata)
    keyboardArea.innerHTML = ''; 
    keyStatus = {}; 

    const rows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        row.forEach(key => {
            const keyDiv = document.createElement('div');
            keyDiv.className = 'key';
            keyDiv.id = `key-${key}`; 
            keyDiv.textContent = key;
            rowDiv.appendChild(keyDiv);
        });
        keyboardArea.appendChild(rowDiv);
    });
}

// Funzione per aggiornare la tastiera
function updateKeyboard(correct, present, absent) {
    // ... (questa funzione rimane invariata, con la correzione di prima)
    correct.forEach(letter => {
        if (letter !== '_') {
            keyStatus[letter] = 'correct';
        }
    });

    present.forEach(letter => {
        if (keyStatus[letter] !== 'correct') {
            keyStatus[letter] = 'present';
        }
    });

    absent.forEach(letter => {
        if (keyStatus[letter] !== 'correct' && keyStatus[letter] !== 'present') {
            keyStatus[letter] = 'absent';
        }
    });

    for (const letter in keyStatus) {
        const keyDiv = document.getElementById(`key-${letter}`);
        if (keyDiv) {
            keyDiv.classList.remove('present', 'absent', 'correct');
            keyDiv.classList.add(keyStatus[letter]);
        }
    }
}

// Funzione per avviare/riavviare il gioco
function startGame() {
    secretWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    attempts = 0;
    masterCorrectPositions = ['_', '_', '_', '_', '_']; // 2. AGGIUNTA QUESTA RIGA (reset)
    
    welcomeMsg.textContent = `Benvenuto nel gioco! Devi indovinare una parola di 5 lettere. Hai un massimo di ${maxAttempts} tentativi.`;
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;
    resultsArea.style.display = "none";
    messageEl.textContent = "";
    messageEl.className = "";
    finalWordEl.textContent = "";
    playAgainButton.style.display = "none";

    createKeyboard(); 

    guessInput.addEventListener("keyup", handleKeyPress);
    guessButton.addEventListener("click", handleGuess);
}

// Funzione per gestire la pressione del tasto Invio
function handleKeyPress(event) {
    // ... (questa funzione rimane invariata)
    if (event.key === "Enter") {
        handleGuess();
    }
}

// Funzione per verificare la parola inserita (Logica Wordle corretta)
function checkWord(guess, secret) {
    // ... (questa funzione rimane invariata)
    let correctPositions = ['_', '_', '_', '_', '_'];
    let presentButWrongPosition = [];
    let absentLetters = [];
    
    let secretLetters = secret.split('');
    let guessLetters = guess.split('');

    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === secretLetters[i]) {
            correctPositions[i] = guessLetters[i];
            secretLetters[i] = null; 
            guessLetters[i] = null;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] !== null) {
            let secretIndex = secretLetters.indexOf(guessLetters[i]);
            if (secretIndex > -1) {
                presentButWrongPosition.push(guessLetters[i]);
                secretLetters[secretIndex] = null;
                guessLetters[i] = null; 
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] !== null) {
            absentLetters.push(guessLetters[i]);
        }
    }

    return { correctPositions, presentButWrongPosition, absentLetters };
}

// Funzione per gestire il tentativo dell'utente
function handleGuess() {
    const guess = guessInput.value.toLowerCase().trim();

    if (guess.length !== 5) {
        messageEl.textContent = "La parola deve essere di 5 lettere.";
        messageEl.className = "error";
        return;
    }

    messageEl.textContent = "";
    messageEl.className = "";

    const { correctPositions, presentButWrongPosition, absentLetters } = checkWord(guess, secretWord);
    
    // 3. MODIFICATO questo blocco per "fondere" i risultati
    for (let i = 0; i < 5; i++) {
        if (correctPositions[i] !== '_') {
            masterCorrectPositions[i] = correctPositions[i];
        }
    }
    
    // 4. MODIFICATO questo blocco per usare "masterCorrectPositions"
    updateKeyboard(masterCorrectPositions, presentButWrongPosition, absentLetters);

    // Mostra i risultati
    resultsArea.style.display = "block";
    correctPosMsg.textContent = masterCorrectPositions.join(' '); // Usa la variabile master
    presentPosMsg.textContent = "Lettere presenti ma in posizione sbagliata: " + [...new Set(presentButWrongPosition)].join(', ');
    absentLettersMsg.textContent = "Lettere assenti: " + [...new Set(absentLetters)].join(', ');

    attempts++;
    guessInput.value = "";

    // Controlla la vittoria (confronta con la parola segreta, non con i trattini)
    if (guess === secretWord) {
        messageEl.textContent = "Congratulazioni! Hai indovinato la parola!";
        messageEl.className = "success";
        endGame();
        return;
    }

    if (attempts >= maxAttempts) {
        messageEl.textContent = "Mi dispiace, hai esaurito i tentativi.";
        messageEl.className = "error";
        finalWordEl.textContent = `La parola era '${secretWord}'.`;
        endGame();
        return;
    }
    
    welcomeMsg.textContent = `Tentativo ${attempts + 1} di ${maxAttempts}.`;
}

// Funzione per terminare il gioco
function endGame() {
    // ... (questa funzione rimane invariata)
    guessInput.disabled = true;
    guessButton.disabled = true;
    guessInput.removeEventListener("keyup", handleKeyPress);
    playAgainButton.style.display = "block";
}

// Avvia il gioco quando la pagina è caricata
document.addEventListener("DOMContentLoaded", startGame);

// Collega la funzione startGame al clic del nuovo pulsante
playAgainButton.addEventListener("click", startGame);
