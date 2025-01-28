const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
const PlayAgainBtn = document.getElementById('play-again');

const correctLetters = []; // doğru harfler
const wrongLetters = []; // yanlış harflerimiz
let selectedWord = getRandomWord(); // global düzeyde olsun.


function getRandomWord() {
    const words = ["javascript","java","python","html","css","php","mongo"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() { 

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

function displayMessage(){
    message.classList.add('show');

    setTimeout(function(){
        message.classList.remove('show');
    },2000);
}

PlayAgainBtn.addEventListener('click', function(){
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = getRandomWord();
    displayWord();
    updateWrongLetters();

    popup.style.display = 'none';
})

function updateWrongLetters(){
    wrongLetters_el.innerHTML = `
        ${wrongLetters.length>0?'<h3>Hatalı Harfler</h3>' : ''}
        ${wrongLetters.map(letter=> `<span>${letter}</span>`)}
    `;

    items.forEach((items, index) => { // items içinde dolaşıyor, 
        const errorCount = wrongLetters.length; // Hatalı harflerimizin sayısını alıyoruz.

        if (index<errorCount){  // Eğer item'in index'i hatalı harf sayısından küçükse,
            items.style.display = 'block';
        }else {
            items.style.display = 'none';
        }
    })
    if (wrongLetters.length ===items.length) {
        popup.style.display = 'flex';
        message_el.innerText = 'Malesef Kaybettiniz :(';
    }
}


window.addEventListener('keydown', function(e){
    if (e.keyCode >= 65 && e.keyCode <= 90){ //kullanıcı klavyeden bir tuşa bastığında bir olay tetikleniyor,sadece harf tuşlarına basıldığında işlemi gerçekleştirmek için bir filtre uygular.
        const letter = e.key;

        if (selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else {
                //console.log('bu harfi zaten eklediniz.');
                displayMessage();
            }
        }else {
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
               // console.log('hatalı harfleri güncelle.'); 
               updateWrongLetters();
            }else{
                displayMessage();
            }
        }
    }
});


displayWord()