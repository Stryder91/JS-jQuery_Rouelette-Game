'use strict'

let mise; 

///Starting money
let money = 100;

let evenBot;
let evenPlayer;

$('.moneyLeft').html(money + ' $.');

$('button').click(function(){
    playGame(); 
});
$("input").keypress(function(event) { 
    if (event.keyCode === 13) { 
        playGame(); 
    } 
}); 

function playGame (){

    let game = true;

    ////Random number
    let randomNumber = Math.floor(Math.random()*50 +1 );
    /////////

    mise = parseInt(($('input').val()));

    ////if true, even. If false, odd
    ////Si true, pair. Si false, impair
    randomNumber % 2 === 0 ? evenBot=true : evenBot = false;
    mise % 2 === 0 ? evenPlayer = true : evenPlayer = false;
    

    if (game){
        console.log(mise);
        if (isNaN(mise)){
            $('.message').html('Ceci n\'est pas un nombre!  ')
        } else if (mise > 50 || mise < 0){
            $('.message').html('On a dit entre 0 et 49!')
        } else {
            
            if (mise === randomNumber){
            console.log(randomNumber);
            money += (mise*10)
            $('.message').html('HOURAA!!!! C\'est le Jackpot! Vous gagnez 10 fois la mise!! ' + (mise*10) + ' grâce à la couleur')
            $('.moneyLeft').html(+ money + ' $.')

            } else if (evenBot === evenPlayer){
                
                money += (mise * 1.5) ;
                $('.message').html('Bravo vous avez gagné ' + (mise * 1.5) + ' grâce à la couleur')
                $('.moneyLeft').html(+ money + ' $.')
                
            } else {
                money -= mise;
                $('.message').html('Dommage vous avez perdu ' + mise + ' à cause de la couleur')
                $('.moneyLeft').html( money + ' $.')

                if (money <= 0){
                    game = false;
                    $('.message').html('Plus d\'argent!')
                    $('input').prop('disabled',true)
                }
            }
            
            $('.number').html(randomNumber);
            console.log(mise + typeof(mise));
            console.log(randomNumber +typeof(mise))
        }
    }
    $('input').val("");
};