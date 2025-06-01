// Hiệu ứng bao lì xì rơi
const envelopeEffect = document.querySelector('.envelope-effect');
function createEnvelope() {
    const envelope = document.createElement('div');
    envelope.className = 'envelope';
    envelope.style.left = Math.random() * 100 + 'vw';
    envelope.style.animationDuration = (2 + Math.random() * 2) + 's';
    envelopeEffect.appendChild(envelope);
    setTimeout(() => envelope.remove(), 4000);
}
setInterval(createEnvelope, 250);

// Popup logic
const receiveBtn = document.getElementById('receive-btn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const confirmBtn = document.getElementById('confirm-btn');
const bankSelect = document.getElementById('bank');
const accountInput = document.getElementById('account');
const trollPopup = document.getElementById('troll-popup');
const closeTroll = document.getElementById('close-troll');

receiveBtn.onclick = () => {
    popup.classList.remove('hidden');
};
closePopup.onclick = () => {
    popup.classList.add('hidden');
};
closeTroll.onclick = () => {
    trollPopup.classList.add('hidden');
};

function validateInput() {
    if (bankSelect.value && accountInput.value.trim().length > 0) {
        confirmBtn.disabled = false;
    } else {
        confirmBtn.disabled = true;
    }
}
bankSelect.onchange = validateInput;
accountInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
    validateInput();
});

confirmBtn.onclick = () => {
    popup.classList.add('hidden');
    setTimeout(() => {
        trollPopup.classList.remove('hidden');
    }, 300);
}; 