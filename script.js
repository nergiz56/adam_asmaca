const word_el = document.getElementById('word');
const corretLetters = ['j', 'a','p','v']; //doğru harfler
const wrongLetters=[];   //hatalı harfler

function getRandomWord(){
    const words = ["javascript", "java", "python"];

    return words[Math.floor(Math.random()* words.length)]; //Math.random() ile üretilen rastgele sayı, words.length değeriyle çarpılır
}


//console.log(getRandomWord());  

function displayWord(){
    const selectedWord = getRandomWord();

    word_el.innerHTML = `
    ${selectedWord.split('').map(letter =>`
        <div class = "letter">
        ${corretLetters.includes(letter) ? letter : ''}
        </div>
        `).join('')}
    `;

    const w = word_el.innerText.replace(/\n/g,'');
    if (w === selectedWord){
        console.log('bildiniz');
    }
}
displayWord();