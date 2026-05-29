/* ====================================================================
   SLOTSFREEUSA CLASSIC VEGAS 3-REEL SLOT
   Virtual credits only. No deposits. No payouts. No real-money gambling.
   ==================================================================== */

(function () {
  const slotSymbols = ['🍒', '🍋', '🔔', 'BAR', '7️⃣'];
  const payoutTable = {
    '🍒': 40,
    '🍋': 30,
    '🔔': 80,
    BAR: 120,
    '7️⃣': 150
  };

  let gameElements = null;
  let credits = 1000;
  let spins = 0;
  let lastWin = 0;
  let isSpinning = false;
  let initialized = false;

  function getGameElements() {
    return {
      reels: Array.from(document.querySelectorAll('.reel')),
      credits: document.getElementById('credits'),
      spins: document.getElementById('spins'),
      lastWin: document.getElementById('lastWin'),
      message: document.getElementById('gameMessage'),
      spinButton: document.getElementById('spinButton'),
      resetButton: document.getElementById('resetButton')
    };
  }

  function isGameReady(elements) {
    return Boolean(
      elements &&
      elements.reels.length === 3 &&
      elements.credits &&
      elements.spins &&
      elements.lastWin &&
      elements.message &&
      elements.spinButton &&
      elements.resetButton
    );
  }

  function updateStats() {
    if (!isGameReady(gameElements)) return;
    gameElements.credits.textContent = credits.toString();
    gameElements.spins.textContent = spins.toString();
    gameElements.lastWin.textContent = lastWin.toString();
  }

  function pickSymbol() {
    return slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
  }

  function scoreSpin(results) {
    const [a, b, c] = results;

    if (a === b && b === c) {
      return payoutTable[a] || 75;
    }

    if (a === b || b === c || a === c) {
      return 10;
    }

    return 0;
  }

  function setReelText(reel, symbol) {
    reel.textContent = symbol;
    reel.classList.toggle('bar-symbol', symbol === 'BAR');
  }

  function spin() {
    if (!isGameReady(gameElements)) {
      gameElements = getGameElements();
    }

    if (!isGameReady(gameElements) || isSpinning) return;

    const bet = 10;

    if (credits < bet) {
      gameElements.message.textContent = 'Out of virtual credits. Press Reset to play again for free.';
      return;
    }

    credits -= bet;
    spins += 1;
    isSpinning = true;
    gameElements.spinButton.disabled = true;
    gameElements.message.textContent = 'Reels spinning...';
    gameElements.reels.forEach((reel) => reel.classList.add('spinning'));

    let animationCount = 0;
    const animation = setInterval(() => {
      gameElements.reels.forEach((reel) => {
        setReelText(reel, pickSymbol());
      });

      animationCount += 1;
      if (animationCount >= 16) {
        clearInterval(animation);
        const results = gameElements.reels.map(() => pickSymbol());

        gameElements.reels.forEach((reel, index) => {
          reel.classList.remove('spinning');
          setReelText(reel, results[index]);
        });

        lastWin = scoreSpin(results);
        credits += lastWin;

        if (lastWin >= 100) {
          gameElements.message.textContent = `Big free-play hit: ${lastWin} virtual credits.`;
        } else if (lastWin > 0) {
          gameElements.message.textContent = `Free-play win: ${lastWin} virtual credits.`;
        } else {
          gameElements.message.textContent = 'No match this spin. Try again for fun.';
        }

        updateStats();
        isSpinning = false;
        gameElements.spinButton.disabled = false;
      }
    }, 65);
  }

  function resetGame() {
    if (!isGameReady(gameElements)) {
      gameElements = getGameElements();
    }

    if (!isGameReady(gameElements)) return;

    credits = 1000;
    spins = 0;
    lastWin = 0;
    isSpinning = false;

    const startingSymbols = ['7️⃣', '🍒', '🔔'];
    gameElements.reels.forEach((reel, index) => {
      reel.classList.remove('spinning');
      setReelText(reel, startingSymbols[index]);
    });

    gameElements.message.textContent = 'Virtual credits reset. No real money is used.';
    updateStats();
    gameElements.spinButton.disabled = false;
  }

  function initSlotGame() {
    if (initialized) return;

    gameElements = getGameElements();

    if (!isGameReady(gameElements)) return;

    initialized = true;
    gameElements.spinButton.addEventListener('click', spin);
    gameElements.resetButton.addEventListener('click', resetGame);
    resetGame();
  }

  window.slotsFreeUSA = window.slotsFreeUSA || {};
  window.slotsFreeUSA.spin = spin;
  window.slotsFreeUSA.resetGame = resetGame;
  window.slotsFreeUSA.initSlotGame = initSlotGame;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlotGame);
  } else {
    initSlotGame();
  }
})();
