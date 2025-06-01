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
const accountNameInput = document.getElementById('account_name');

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
    if (bankSelect.value && accountInput.value.trim().length > 0 && accountNameInput.value.trim().length > 0) {
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
accountNameInput.addEventListener('input', validateInput);

function getRandomColor() {
    const colors = [
        '#e53935', '#d84315', '#ffb300', '#43a047', '#1e88e5', '#8e24aa', '#fbc02d', '#00bcd4', '#ff4081', '#6d4c41'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showFallingTexts(text) {
    // Mỗi cột rơi xuống một cụm đầy đủ (tên + bell), không tách từng từ/ký tự
    const columns = 4; // số cột chữ rơi
    const baseSpacing = 260; // khoảng cách giữa các cột
    const baseLeft = 50;
    for (let col = 0; col < columns; col++) {
        setTimeout(() => {
            const fallingText = document.createElement('div');
            fallingText.className = 'falling-text';
            fallingText.textContent = text;
            fallingText.style.color = getRandomColor();
            const offset = (col - (columns-1)/2) * baseSpacing;
            fallingText.style.left = `calc(${baseLeft}% + ${offset}px)`;
            fallingText.style.fontSize = '3.2rem';
            document.body.appendChild(fallingText);
            setTimeout(() => { fallingText.remove(); }, 5000);
        }, col * 200);
    }
}

confirmBtn.onclick = () => {
    popup.classList.add('hidden');
    setTimeout(() => {
        // Hiệu ứng nhiều chữ rơi xuống, mỗi chữ một màu
        const name = accountNameInput.value.trim();
        if (name) {
            showFallingTexts(name + ' bell');
        }
        trollPopup.classList.remove('hidden');
    }, 300);
}; 