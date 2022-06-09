let words = [
    {
        'letters': 6,
        'category': 'Foods',
        'word': 'orange'
    },
    {
        'letters': 7,
        'category': 'Animals',
        'word': 'dolphin'
    }
]

let alphabet = 
[
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]
$(document).ready(()=>{
    getWord()
})
function getWord(){
    random_number = parseInt(Math.random() * words.length)
    randWord = words[random_number]
    $('#category-text').html(randWord.category)
}

// creating the letter buttons
var main = document.querySelector('#main-div')
for(var letter of alphabet){
    var button = document.createElement('button')
    $(button).attr('id',letter)
    $(button).attr('class','letter')
    $(button).html(letter)
    $(main).append(button)
}

function fillBlanks(){
    var gameOver = false
    $('.letter').click(function(){
        var correctGuess = false
        let id = $(this).attr('id')
        var life = parseInt($('#life-count').text())
        console.log(id)
        for(let i = 0; i < randWord.word.length; i++){
            if(randWord.word.charAt(i).toLowerCase() === id){
                if((life > 0 && $('.blanks').eq(i).html() == '_' || $('.blank').eq(i).html() == id)){
                    $('.blanks').eq(i).html(id)
                    correctGuess = true
                    if($('#blank').text() === randWord.word.toLowerCase()){
                        $('#result').text('You win!')
                        correctGuess = true
                        gameOver = true
                    }
                }
                
            }
        }
    })
}

