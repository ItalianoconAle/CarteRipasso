const decks = {
  unit1: [
    { question: 'l\'anno', answer: 'year' },
    { question: 'l\'addetto', answer: 'worker; clerk' },
    { question: 'davvero', answer: 'really; truly' },
    { question: 'anche', answer: 'also; too' },
    { question: 'quale', answer: 'which' },
    { question: 'ho', answer: 'I have' },
    { question: 'sono', answer: 'I am; they are' },
    { question: 'io', answer: 'I' },
    { question: 'tu', answer: 'you' },
    { question: 'lui', answer: 'he' },
    { question: 'lei', answer: 'she' },
    { question: 'noi', answer: 'we' },
    { question: 'voi', answer: 'you (plural)' },
    { question: 'loro', answer: 'they' },
    { question: 'Lei', answer: 'you (formal)' },
    { question: 'mi chiamo', answer: 'my name is' },
    { question: 'come ti chiami?', answer: 'what is your name?' },
    { question: 'di dove sei?', answer: 'where are you from?' },
    { question: 'sono di...', answer: 'I am from...' },
    { question: 'come si chiama?', answer: 'what is your name? (fml.) ; what is his/her name?' },
    { question: 'di dov\'è', answer: 'where are you from? (fml.); where is he/she from?' },
    { question: 'il libro', answer: 'book' },
    { question: 'la penna', answer: 'pen' },
    { question: 'il tavolo', answer: 'table' },
    { question: 'la sedia', answer: 'chair' },
    { question: 'l\'aula', answer: 'classroom' },
    { question: 'l\'albero', answer: 'tree' },
    { question: 'la casa', answer: 'house' },
    { question: 'il gatto', answer: 'cat' },
    { question: 'il cane', answer: 'dog' },
    { question: 'lo zaino', answer: 'backpack' },
    { question: 'il caffè', answer: 'coffee' },
    { question: 'il televisore', answer: 'television (set)' },
    { question: 'la televisione', answer: 'television (prog.)' },
    { question: 'il giornale', answer: 'newspaper' },
    { question: 'come stai?', answer: 'how are you? (inf.)' },
    { question: 'l\'occhio', answer: 'eye' },
    { question: 'sto bene', answer: 'I’m well' },
    { question: 'lo stivalo', answer: 'boot' },
    { question: 'il sole', answer: 'sun' },
  ],
  unit2: [
    { question: 'scusa', answer: 'excuse me; sorry (inf.)' },
    { question: 'scusi', answer: 'excuse me; sorry (fml.)' },
    { question: 'il commesso', answer: 'shop assistant; clerk' },
    { question: 'la vetrina', answer: 'shop window' },
    { question: 'la gonna', answer: 'skirt' },
    { question: 'i pantaloni', answer: 'trousers / pants' },
    { question: 'le scarpe', answer: 'shoes' },
    { question: 'la camicia', answer: 'shirt' },
    { question: 'la maglietta', answer: 't-shirt' },
    { question: 'il vestito', answer: 'dress' },
    { question: 'il tacco', answer: 'heel' },
    { question: 'la mela', answer: 'apple' },
    { question: 'la pera', answer: 'pear' },
    { question: 'la fragola', answer: 'strawberry' },
    { question: 'paio', answer: 'pair' },
    { question: 'il negozio', answer: 'shop' },
    { question: 'l\'abbigliamento', answer: 'clothing' },
    { question: 'il saldo', answer: 'sale' },
    { question: 'al momento', answer: 'at the moment' },
    { question: 'grazie a Lei', answer: 'thank you (fml.)' },
    { question: 'e', answer: 'and' },
    { question: 'di', answer: 'of; about' },
    { question: 'per', answer: 'for' },
    { question: 'più', answer: 'more' },
    { question: 'altro', answer: 'other/another' },
    { question: 'questo', answer: 'this' },
    { question: 'quello', answer: 'that' },
    { question: 'qui/qua', answer: 'here' },
    { question: 'lì/là', answer: 'there' },
    { question: 'quanto', answer: 'how much' },
    { question: 'in saldo', answer: 'on sale' },
    { question: 'ecco', answer: 'here/here you go' },
    { question: 'allora', answer: 'then/in that case' },
    { question: 'siccome', answer: 'since; because' },
    { question: 'comunque', answer: 'anyway' },
    { question: 'la macchina', answer: 'car' },
    { question: 'l\'ombrello', answer: 'umbrella' },
    { question: 'sporco', answer: 'dirty' },
    { question: 'sconvolto', answer: 'shocked; upset' },
    { question: 'seccante', answer: 'annoying' },
    { question: 'vorrei', answer: 'I would like' },
    { question: 'costa', answer: 'it costs' },
    { question: 'costano', answer: 'they cost' },
  ],
    unit3: [
    { question: 'la bancarella', answer: 'stall' },
    { question: 'lo sconto', answer: 'discount' },
    { question: 'il prezzo', answer: 'price' },
    { question: 'prezzo fisso', answer: 'fixed price' },
    { question: 'lo scontrino', answer: 'receipt' },
    { question: 'la merce', answer: 'goods' },
    { question: 'le caffettiera', answer: 'coffee maker' },
    { question: 'la moka', answer: 'moka pot' },
    { question: 'il bicchiere', answer: 'glass (drinking)' },
    { question: 'la tazza', answer: 'mug' },
    { question: 'la tazzina', answer: 'small cup; espresso cup' },
    { question: 'la tovaglia', answer: 'tablecloth' },
    { question: 'la verdura', answer: 'vegetable' },
    { question: 'la frutta', answer: 'fruit' },
    { question: 'la confezione', answer: 'package' },
    { question: 'il barattolo', answer: 'jar' },
    { question: 'i carciofi', answer: 'artichokes' },
    { question: 'le olive', answer: 'olives' },
    { question: 'la fontana', answer: 'fountain' },
    { question: 'la busta', answer: 'bag; envelope' },
    { question: 'il mazzo', answer: 'bouquet' },
    { question: 'il girasole', answer: 'sunflower' },
    { question: 'qualcuno', answer: 'someone' },
    { question: 'nessuno', answer: 'no one' },
    { question: 'vicino', answer: 'near; nearby' },
    { question: 'a destra', answer: 'to the right' },
    { question: 'a sinistra', answer: 'to the left' },
    { question: 'se', answer: 'if' },
    { question: 'questo', answer: 'this' },
    { question: 'quello', answer: 'that' },
    { question: 'quanti', answer: 'how many' },
    { question: 'Le do', answer: 'I give you (fml.)' },
    { question: 'c\'è', answer: 'there is' },
    { question: 'ci sono', answer: 'there are' },
    { question: 'mi dica', answer: '[please] tell me (fml.)' },
    { question: 'mi dia', answer: '[please] give me (fml.)' },
    { question: 'va bene così?', answer: 'is it fine like this?' },
    { question: 'dare un\'occhiata', answer: 'to take a look' },
    { question: 'il pane', answer: 'bread' },
    { question: 'ogni giorno', answer: 'every day' },
    { question: 'le poesie', answer: 'poems' },
    { question: 'la cena', answer: 'dinner' },
    { question: 'poco', answer: 'little' },
    { question: 'molto', answer: 'much; a lot' },
    { question: 'tanto', answer: 'much; a lot' },
    { question: 'troppo', answer: 'too much; too many' },
    { question: 'parecchio', answer: 'quite a lot' },
    { question: 'vari', answer: 'various' },
    { question: 'tutto', answer: 'all; everything' },
    { question: 'ogni', answer: 'every' },
    { question: 'ciascuno', answer: 'each' },
    { question: 'qualunque', answer: 'any' },
    { question: 'qualsiasi', answer: 'any' },
  ],
  verbs: [

    { question: 'essere', answer: 'to be' },
    { question: 'avere', answer: 'to have' },
    { question: 'comprare', answer: 'to buy' },
    { question: 'prendere', answer: 'to take; to get' },
    { question: 'chiamarsi', answer: 'to be called' },
    { question: 'desiderare', answer: 'to want; to desire' },
    { question: 'sapere', answer: 'to know (facts or skills)' },
    { question: 'fare', answer: 'to do / to make' },
    { question: 'dare', answer: 'to give' },
    { question: 'volere', answer: 'to want' },
    { question: 'potere', answer: 'to be able to' },
    { question: 'dire', answer: 'to say' },
    { question: 'rappresentare', answer: 'to represent' },
    { question: 'preparare', answer: 'to prepare' },
    { question: 'leggere', answer: 'to read' },
    { question: 'dormire', answer: 'to sleep' },
    { question: 'scrivere', answer: 'to write' },
    { question: 'parlare', answer: 'to speak' },
    { question: 'dovere', answer: 'to have to' },
    { question: 'mangiare', answer: 'to eat' },
    { question: 'bere', answer: 'to drink' },
    { question: 'andare', answer: 'to go' },
    { question: 'venire', answer: 'to come' },
    { question: 'cominciare', answer: 'to start' },
    { question: 'ordinare', answer: 'to order' },
    { question: 'tornare', answer: 'to return' },
    { question: 'cucinare', answer: 'to cook' },
    { question: 'ascoltare', answer: 'to listen' },
    { question: 'guardare', answer: 'to watch' },
    { question: 'conoscere', answer: 'to know (people or places)' },
    { question: 'accomodarsi', answer: 'to make oneself comfortable' },
    { question: 'aiutare', answer: 'to help' },
    { question: 'raggiungere', answer: 'to reach' },
    { question: 'trovarsi', answer: 'to be found' },
    { question: 'indicare', answer: 'to indicate' },
    { question: 'girare', answer: 'to turn' },
    { question: 'svoltare', answer: 'to turn; to change direction' },
    { question: 'proseguire', answer: 'to continue' },
    { question: 'gestire', answer: 'to manage; to handle' },
    { question: 'iniziare', answer: 'to begin' },
    { question: 'aprire', answer: 'to open' },
    { question: 'chiudere', answer: 'to close' },
    { question: 'restare', answer: 'to stay' },
    { question: 'assumere', answer: 'to take on; to hire' },
    { question: 'intendere', answer: 'to mean; to intend' },
    { question: 'giocare', answer: 'to play' },
    { question: 'allenarsi', answer: 'to train; to exercise' },
    { question: 'suonare', answer: 'to play (an instrument)' },
    { question: 'praticare', answer: 'to practice' },
    { question: 'rilassarsi', answer: 'to relax' },
    { question: 'coprire', answer: 'to cover' },
    { question: 'fissare', answer: 'to focus; to set; to establish' },
    { question: 'augurare', answer: 'to wish (someone) well' },
    { question: 'prenotare', answer: 'to reserve' },
    { question: 'passare', answer: 'to pass; to spend (time)' },
    { question: 'viaggiare', answer: 'to travel' },
    { question: 'stampare', answer: 'to print' },
    { question: 'alloggiare', answer: 'to stay (at a hotel)' },
    { question: 'prestare', answer: 'to lend; to provide' },
    { question: 'permettere', answer: 'to allow; to permit' },
    { question: 'prevedere', answer: 'to foresee; to predict; to call for' },
    { question: 'convenire', answer: 'to be worthwhile; to be suitable; to gather' },
    { question: 'mancare', answer: 'to lack; to be missing' },
    { question: 'ammalarsi', answer: 'to get sick' },
    { question: 'accompagnare', answer: 'to accompany; to take (sb. somewhere)' },
    { question: 'sentirsi', answer: 'to feel' },
    { question: 'rompersi', answer: 'to break' },
    { question: 'cadere', answer: 'to fall' },
    { question: 'inciampare', answer: 'to trip' },
    { question: 'guarire', answer: 'to heal' },
    { question: 'riprendersi', answer: 'to recover' },
    { question: 'temere', answer: 'to fear; to worry' },
    { question: 'restituire', answer: 'to return (sth.)' },
    { question: 'raccomandarsi', answer: 'to plead; to suggest' },
    { question: 'scordare', answer: 'to forget' },
    { question: 'arredare', answer: 'to furnish' },
    { question: 'affittare', answer: 'to rent' },
    { question: 'spendere', answer: 'to spend (money)' },
    { question: 'preoccupare', answer: 'to worry; to be concerned' },
    { question: 'trasferirsi', answer: 'to transfer; to move' },
    { question: 'apprezzare', answer: 'to appreciate' },
    { question: 'udire', answer: 'to hear' },
    { question: 'annusare', answer: 'to smell; to sniff' },
    { question: 'assaggiare', answer: 'to taste' },
    { question: 'toccare', answer: 'to touch' },
    { question: 'percepire', answer: 'to perceive' },
    { question: 'puzzare', answer: 'to smell bad' },
    { question: 'profumare', answer: 'to smell nice' },
    { question: 'odorare', answer: 'to smell; to have an odor' },

  ],
};

const deckLabelMap = {
  unit1: 'Unità 1',
  unit2: 'Unità 2',
  unit3: 'Unità 3',
  verbs: 'Verbi',
};

const cardBtn = document.getElementById('cardBtn');
const progressLabel = document.getElementById('progressLabel');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const deckCount = document.getElementById('deckCount');
const deckTitle = document.getElementById('deckTitle');
const deckSelect = document.getElementById('deckSelect');
const modeButtons = document.querySelectorAll('.mode-chip');
const hero = document.getElementById('hero');
const toggleHeaderBtn = document.getElementById('toggleHeaderBtn');
const instructionsPanel = document.querySelector('.info-panel');
const toggleInstructionsBtn = document.getElementById('toggleInstructionsBtn');
const quizPanel = document.getElementById('quizPanel');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const wrongSound = new Audio('audio/failure.wav')
const correctSound = new Audio('audio/positive-blip.wav');
const muteBtn = document.getElementById('muteBtn'); // Grab the HTML button
const endScreen = document.getElementById('deckEndContainer');
const restartBtn = document.getElementById('restartBtn');
const starBtn = document.getElementById('starBtn');
const markedOption = document.getElementById('markedOption');

let isMuted = false;
let currentDeck = 'unit1';
let mode = 'flip';
let currentIndex = 0;
let isFlipped = false;
let touchStartX = 0;
let touchStartY = 0;
let markedCards = []; 
let studyMarkedOnly = false;

function getCurrentDeck() {
  if (currentDeck === 'marked') {
    // Combine all decks and filter down to only the ones the user starred
    const allCards = [...decks.unit1, ...decks.unit2, ...decks.unit3, ...decks.verbs];
    return allCards.filter(card => markedCards.includes(card.question));
  }
  return decks[currentDeck] || decks.unit1;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildQuizOptions(deck, correctAnswer) {
  // 1. Grab wrong answers from the active deck
  let distractors = deck
    .map((item) => item.answer)
    .filter((answer) => answer !== correctAnswer);

  // --- THE SAFETY CHECK ---
  // If the active deck is too small (like a Ripasso deck with < 4 items),
  // pull extra dummy answers from Unit 1 so the loop can finish safely.
  if (deck.length < 4) {
    const backupDistractors = decks.unit1
      .map((item) => item.answer)
      .filter((answer) => answer !== correctAnswer);
    
    distractors = [...distractors, ...backupDistractors];
  }

  const options = new Set([correctAnswer]);
  while (options.size < 4) {
    const randomAnswer = distractors[Math.floor(Math.random() * distractors.length)];
    if (randomAnswer) options.add(randomAnswer);
    if (options.size >= 4) break;
  }

  return shuffle([...options]);
}

function renderCard() {
  const deck = getCurrentDeck();
  const card = deck[currentIndex] || deck[0];

  currentIndex = Math.min(currentIndex, deck.length - 1);
  cardFront.textContent = card.question;
  cardBack.textContent = card.answer;
  // --- STAR BUTTON VISUAL UPDATE ---
  if (starBtn) {
    if (markedCards.includes(card.question)) {
      starBtn.textContent = '★ Salvata';
      starBtn.style.color = '#ffcc00'; // Turn it gold
    } else {
      starBtn.textContent = '☆ Ripasso';
      starBtn.style.color = ''; // Reset color
    }
  }
  // ---------------------------------
  progressLabel.textContent = `${currentIndex + 1} / ${deck.length}`;
  deckCount.textContent = `${deck.length} carte`;
  cardBtn.classList.remove('flipped');
  isFlipped = false;
  quizFeedback.textContent = '';

if (mode === 'quiz') {
    cardBtn.classList.add('hidden');
    quizPanel.classList.remove('hidden');
    quizOptions.innerHTML = '';

    // The quiz loop belongs INSIDE the mode check block
    buildQuizOptions(deck, card.answer).forEach((answer) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'quiz-option';
      button.textContent = answer;
      button.addEventListener('click', () => {
        const isCorrect = answer === card.answer;
        
        if (isCorrect) {
          // --- UPDATED: ADD CORRECT STYLING & FEEDBACK ---
          button.classList.add('correct');
          quizFeedback.textContent = 'Corretto! Bravo.';

          if (!isMuted) {
            try {
              correctSound.currentTime = 0;
              correctSound.play().catch((error) => {
                console.warn("Playback prevented by browser:", error);
              });
            } catch (audioError) {
              console.error("Audio error:", audioError);
            }
          }

          // --- NEW: AUTO-ADVANCE BEHAVIOR WITH 1s DELAY ---
          setTimeout(() => {
            if (currentIndex < getCurrentDeck().length - 1) {
              nextCard(); 
            } else {
              quizFeedback.textContent = 'Ottimo lavoro! Hai completato questo set!';
            }
          }, 1000);

        } else {
          // --- UPDATED: ADD WRONG STYLING & FEEDBACK ---
          button.classList.add('wrong');
          quizFeedback.textContent = `Non proprio. Prova di nuovo!`;

          // --- WAV AUDIO PLAYBACK WITH MUTE CHECK ---
          if (!isMuted) {
            try {
              wrongSound.currentTime = 0;
              wrongSound.play().catch((error) => {
                console.warn("Playback prevented by browser:", error);
              });
            } catch (audioError) {
              console.error("Audio error:", audioError);
            }
          }
          // -----------------------------------------------------
        }
      });
      quizOptions.appendChild(button);
    });
  } else {
    // If we are NOT in quiz mode, make sure the regular flashcard stays visible
    cardBtn.classList.remove('hidden');
    quizPanel.classList.add('hidden');
  }
  
}

function toggleCard() {
  isFlipped = !isFlipped;
  cardBtn.classList.toggle('flipped', isFlipped);
}

function nextCard() {
  const deck = getCurrentDeck();
  
  // Check if we just finished the last card
  if (currentIndex === deck.length - 1) {
    showEndScreen(true);
    return;
  }
  
  currentIndex++;
  renderCard();
}

function prevCard() {
  if (currentIndex === 0) return; // Prevent going past the first card

  // FIX: Check for 'end-screen-revealed' to see if the end screen is active
  if (endScreen && endScreen.classList.contains('end-screen-revealed')) {
    showEndScreen(false);
    return;
  }

  currentIndex--;
  renderCard();
}

function showEndScreen(shouldShow) {
  if (shouldShow) {
    // Hide standard layout panels cleanly
    cardBtn?.classList.add('hidden');
    quizPanel?.classList.add('hidden');
    
    // Set the announcement text
   cardFront.innerHTML = `<div class="completion-wrap"><span class="completion-text">Hai completato il mazzo!</span></div>`;
    cardBack.innerHTML = `<div class="completion-wrap"><span class="completion-text">Hai completato il mazzo!</span></div>`;
    
    // Keep frame rendering visible
    cardBtn?.classList.remove('hidden', 'flipped');
    isFlipped = false;
    
    // SWAP CLASSES: Hide original frame rule and display the container
    endScreen?.classList.remove('end-screen-shrouded');
    endScreen?.classList.add('end-screen-revealed');
    
    progressLabel.textContent = "Completato!";
  } else {
    // SWAP CLASSES BACK: Hide the container immediately
    endScreen?.classList.remove('end-screen-revealed');
    endScreen?.classList.add('end-screen-shrouded');
    
    renderCard();
  }
}

function restartDeck() {
  currentIndex = 0;
  showEndScreen(false);
}

function shuffleCards() {
  const deck = getCurrentDeck();
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  currentIndex = 0;
  renderCard();
}

function switchDeck(newDeck) {
  currentDeck = newDeck;
  currentIndex = 0;
  if (deckSelect) deckSelect.value = newDeck;
  renderCard();
}

function switchMode(newMode) {
  mode = newMode;
  modeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === newMode);
  });
  renderCard();
}

function setHeaderVisible(visible) {
  hero?.classList.toggle('hero-collapsed', !visible);
  if (toggleHeaderBtn) {
    toggleHeaderBtn.textContent = visible ? 'Nascondi intestazione' : 'Mostra intestazione';
  }
}

function toggleHeader() {
  if (!hero) return;
  const shouldShow = hero.classList.contains('hero-collapsed');
  setHeaderVisible(shouldShow);
}

function setInstructionsVisible(visible) {
  instructionsPanel?.classList.toggle('collapsed', !visible);
  if (toggleInstructionsBtn) {
    toggleInstructionsBtn.textContent = visible ? 'Nascondi istruzioni' : 'Mostra istruzioni';
  }
}

function toggleInstructions() {
  if (!instructionsPanel) return;
  const shouldShow = instructionsPanel.classList.contains('collapsed');
  setInstructionsVisible(shouldShow);
}

cardBtn.addEventListener('click', () => {
  toggleCard();
  if (hero && !hero.classList.contains('hero-collapsed')) {
    setHeaderVisible(false);
  }
});

cardBtn.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

cardBtn.addEventListener('touchend', (event) => {
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - touchStartX;
  const deltaY = touch.clientY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
    event.preventDefault();
    if (deltaX < 0) nextCard();
    else prevCard();
    if (hero && !hero.classList.contains('hero-collapsed')) {
      setHeaderVisible(false);
    }
    return;
  }

  if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) {
    event.preventDefault();
    toggleCard();
    if (hero && !hero.classList.contains('hero-collapsed')) {
      setHeaderVisible(false);
    }
  }
}, { passive: false });

prevBtn.addEventListener('click', () => {
  prevCard();
  if (hero && !hero.classList.contains('hero-collapsed')) {
    setHeaderVisible(false);
  }
});
nextBtn.addEventListener('click', () => {
  nextCard();
  if (hero && !hero.classList.contains('hero-collapsed')) {
    setHeaderVisible(false);
  }
});
shuffleBtn.addEventListener('click', () => {
  shuffleCards();
  if (hero && !hero.classList.contains('hero-collapsed')) {
    setHeaderVisible(false);
  }
});
if (deckSelect) {
  deckSelect.addEventListener('change', (event) => {
    switchDeck(event.target.value);
    if (hero && !hero.classList.contains('hero-collapsed')) {
      setHeaderVisible(false);
    }
  });
}
if (toggleHeaderBtn) {
  toggleHeaderBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleHeader();
  });
}

if (toggleInstructionsBtn) {
  toggleInstructionsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleInstructions();
  });
}
if (muteBtn) {
  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted; // Toggle the true/false switch
    
    // Update the button appearance/text dynamically
    if (isMuted) {
      muteBtn.textContent = '🔇 Audio Disattivato';
      muteBtn.classList.add('muted'); // Optional: for custom CSS styling later
    } else {
      muteBtn.textContent = '🔊 Audio Attivo';
      muteBtn.classList.remove('muted');
    }
  });
}
if (restartBtn) {
  restartBtn.addEventListener('click', restartDeck);
}
if (starBtn) {
  starBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the flashcard from flipping when tapping the star
    
    const deck = getCurrentDeck();
    if (deck.length === 0) return;
    const card = deck[currentIndex];

    const index = markedCards.indexOf(card.question);
    if (index === -1) {
      // Add to list
      markedCards.push(card.question);
    } else {
      // Remove from list
      markedCards.splice(index, 1);
    }

    // Update the button with the new count
    if (markedOption) {
      markedOption.textContent = `⭐Ripasso(${markedCards.length})`;
      markedOption.disabled = markedCards.length === 0; // Unlock option if count > 0
    }

    // If we are currently studying marked cards and just removed the last one, boot back to Unit 1
    if (currentDeck === 'marked' && !markedCards.includes(card.question)) {
      const remaining = getCurrentDeck();
      if (remaining.length === 0) {
        switchDeck('unit1');
        return;
      }
    }

    renderCard();
  });
}

function syncMobileInstructionVisibility() {
  const isMobile = window.matchMedia('(max-width: 980px)').matches;
  setInstructionsVisible(!isMobile);
}

window.addEventListener('resize', syncMobileInstructionVisibility);
modeButtons.forEach((button) => {
  button.addEventListener('click', () => switchMode(button.dataset.mode));
});

syncMobileInstructionVisibility();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch((error) => {
      console.error('Service worker registration failed:', error);
    });
  });
}

renderCard();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => {
        // Check for updates automatically in the background
        reg.update();
        console.log('Service Worker registered!');
      });
  });
}
