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
['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
$(document).ready(()=>{
    fillBlanks()
})
/*function getWord(){
    var random_number = parseInt(Math.random() * words.length)
    randWord = words[random_number]
    
}*/

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
    
    //getWord()
    const randWord = words[Math.floor(Math.random() * words.length)]
    var gameOver = false
    $('#category-text').html(randWord.category)
    for(var i=0;i<randWord.word.length;i++){
        var blanks = `<span class='blank' id='blank_${i}'>_</span>`
        $('#inner blanks').append(blanks)
    }
    $('.letter').click(function(){

        var correctGuess = false

        let id = $(this).attr('id')
        var life = parseInt($('#life-count').text())
        console.log(id)
        for(let i = 0; i < randWord.word.length; i++){
            if(randWord.word.charAt(i).toLowerCase() === id){
                if((life > 0 && ($('.blanks').eq(i).html()) === '_' || $('.blank').eq(i).html() === id)){
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
        if(life > 0 && correctGuess != true && gameOver != true){
            life = life-1
            $('#life').text(life)
        } 
        else if(life === 0){
            $('#result').text('You lost.')
        }
    })
}

