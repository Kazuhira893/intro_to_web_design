// JavaScript Document

$(document).ready(function(){
    var choiceRock = false;
    var choicePaper = false;
    var choiceScissors = false;
    var choiceArray = ["rock","paper","scissors"];
    
//    Rock button click 
    $('#rock').click(function(){
       $('#textRock').toggleClass('darkmegenta') 
        if (choiceRock == true){
            choiceRock = false;    
        }
        else{
            choiceRock = true;    
        }
        console.log(choiceRock);       
    });
    
//    Paper button click
    $('#paper').click(function(){
       $('#textPaper').toggleClass('darkmegenta') 
        if (choicePaper == true){
            choicePaper = false;    
        }
        else{
            choicePaper = true;    
        }
        console.log(choicePaper);       
    });
    
//    Scissor button click
    $('#scissors').click(function(){
       $('#textScissors').toggleClass('darkmegenta') 
        if (choiceScissors == true){
            choiceScissors = false;    
        }
        else{
            choiceScissors = true;    
        }
        console.log(choiceScissors);       
    });
    
//    GO button click
    $('#GO').click(function(){
        play(); 
    });
    
//    Play function
    function play(){
        var randomeChoice = Math.floor(Math.random() * choiceArray.length);
        var computerChoice = choiceArray[randomeChoice];
        console.log(choiceArray[randomeChoice]);
        //console.log(randomeChoice);
        
        // Rock
        if (choiceRock == true){
            if (computerChoice == "rock"){
                $('h2').text('The computer chose ' + computerChoice + ': Draw');
            }
            else if(computerChoice == "paper"){
                $('h2').text('The computer chose ' + computerChoice + ': You Lose');
            }
            else{
                $('h2').text('The computer chose ' + computerChoice + ': You Win');
            }   
        }
        //Paper
        else if (choicePaper == true){b 
            if (computerChoice == "rock"){
                $('h2').text('The computer chose ' + computerChoice + ': You Win');
            }
            else if(computerChoice == "paper"){
                $('h2').text('The computer chose ' + computerChoice + ': Draw');
            }
            else{
                $('h2').text('The computer chose ' + computerChoice + ': You Lose');
            }   
        }
        //Scissors
        else if (choiceScissors == true){
            if (computerChoice == "rock"){
                $('h2').text('The computer chose ' + computerChoice + ': You Lose');
            }
            else if(computerChoice == "paper"){
                $('h2').text('The computer chose ' + computerChoice + ': You Win');
            }
            else{
                $('h2').text('The computer chose ' + computerChoice + ': Draw');
            }   
        }

        //Exceptions
        if (choicePaper == false && choiceRock == false && choiceScissors == false){
            $('h2').text('Choose Rock, Paper, or Scissors');
        }
        
        if (choiceRock == true){
            if (choicePaper == true){
                $('h2').text('You can only choose one');
            }
            else if (choiceScissors == true){
                $('h2').text('You can only choose one');
            }
        }
        else if (choicePaper == true){
            if (choiceScissors == true){
                $('h2').text('You can only choose one');
            }
        }
    }

});