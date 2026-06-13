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
    { question: 'come si chiama?', answer: 'what is your name? (formal) ; what is his/her name?' },
    { question: 'di dov\'è', answer: 'where are you from? (formal); where is he/she from?' },
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
    { question: 'la televisione', answer: 'television (programming)' },
    { question: 'il giornale', answer: 'newspaper' },
    { question: 'il telefono', answer: 'phone' },
    { question: 'l\'occhio', answer: 'eye' },
    { question: 'la pianta', answer: 'plant' },
    { question: 'lo stivalo', answer: 'boot' },
    { question: 'il sole', answer: 'sun' },
  ],
  unit2: [
    { question: 'buongiorno', answer: 'good morning' },
    { question: 'buonasera', answer: 'good evening' },
    { question: 'ciao', answer: 'hi / bye' },
    { question: 'grazie', answer: 'thank you' },
    { question: 'prego', answer: 'you’re welcome' },
    { question: 'per favore', answer: 'please' },
    { question: 'come stai?', answer: 'how are you?' },
    { question: 'sto bene', answer: 'I’m well' },
    { question: 'che cosa?', answer: 'what?' },
    { question: 'dove?', answer: 'where?' },
  ],
  verbs: [
    { question: 'essere', answer: 'to be' },
    { question: 'avere', answer: 'to have' },
    { question: 'fare', answer: 'to do / to make' },
    { question: 'andare', answer: 'to go' },
    { question: 'venire', answer: 'to come' },
    { question: 'volere', answer: 'to want' },
    { question: 'potere', answer: 'to be able to' },
    { question: 'dovere', answer: 'to have to' },
    { question: 'mangiare', answer: 'to eat' },
    { question: 'bere', answer: 'to drink' },
  ],
};

const deckLabelMap = {
  unit1: 'Unità 1',
  unit2: 'Unità 2',
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
    const allCards = [...decks.unit1, ...decks.unit2, ...decks.verbs];
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
  const distractors = deck
    .map((item) => item.answer)
    .filter((answer) => answer !== correctAnswer);

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
      starBtn.textContent = '☆ Ripasso＋';
      starBtn.style.color = ''; // Reset color
    }
  }
  // ---------------------------------
  progressLabel.textContent = `Carta ${currentIndex + 1} / ${deck.length}`;
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
      markedOption.textContent = `⭐Ripasso Più (${markedCards.length})`;
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
      .then(reg => console.log('Service Worker registered successfully!', reg.scope))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}
