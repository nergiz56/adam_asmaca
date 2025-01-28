const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');

const correctLetters = ['j','a','v','s','t'];
const wrongLetters = [];


function getRandomWord() {
    const words = ["javascript","java","python"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    
    `;

    const w = word_el.innerText.replace(/\n/g,'');
    if (w === selectedWord) {
        popup.style.display = 'flex';
        message_el.innerText = 'Tebrikler kazandınız.';
    }
}

window.addEventListener('keydown', function(e){
    if (e.keyCode >= 65 && e.keyCode <= 90){ //kullanıcı klavyeden bir tuşa bastığında bir olay tetikleniyor,sadece harf tuşlarına basıldığında işlemi gerçekleştirmek için bir filtre uygular.
        console.log(e.key);
        console.log(e.keyCode);
    }
});


displayWord()