const coin = document.getElementById('coin');
const flipButton = document.getElementById('flipButton');
const resultText = document.getElementById('result');

flipButton.addEventListener('click', () => {
  const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

  flipButton.disabled = true;
  resultText.textContent = 'Flipping...';

  coin.classList.remove('spinning');
  void coin.offsetWidth;
  coin.classList.add('spinning');

  setTimeout(() => {
    coin.style.transform = result === 'Heads' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    resultText.textContent = `Result: ${result}`;
    flipButton.disabled = false;
  }, 1000);
});
