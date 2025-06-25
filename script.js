const modal = document.getElementById('playerModal');
const modalName = document.getElementById('modalName');
const modalStrike = document.getElementById('modalStrike');
const modalMatches = document.getElementById('modalMatches');
const modalJersey = document.getElementById('modalJersey');
const modalPerformance = document.getElementById('modalPerformance');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click', () => {
        modalName.textContent = card.dataset.name;
        modalStrike.textContent = card.dataset.strike;
        modalMatches.textContent = card.dataset.matches;
        modalJersey.textContent = card.dataset.jersey;
        modalPerformance.textContent = card.dataset.performance;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
