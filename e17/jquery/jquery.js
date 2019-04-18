// JavaScript Document
$(document).ready(function(){
  var choiceleftcard = false;
    var choicemiddlecard = false;
    var choicerightcard = false;
	var cardArray =["Card1","Card2","Card3"];
    
//    Left Card button click 
    $('#Card1').click(function(){
       $('#Card1').toggleClass('blue'); 
        if (choiceleftcard == true){
            choicemiddlecard == false; 
			choicerightcard == false;
        }
        else{
            choiceleftcard = true;    
        }
        
        console.log(choiceleftcard);       
	});
		
		//middle card pick
		
	$('#Card2').click(function(){
		$('#Card2').toggleClass('blue');
		if (choicemiddlecard == true){
			choiceleftcard == false;
			choicerightcard == false;
		}	
			
		else{
			
			choicemiddlecard = true;
		}
		console.log(choicemiddlecard);
		
		});
		
		//right card pick
		
	$('#Card3').click(function(){
		$('#Card3').toggleClass('blue');
		if (choicerightcard == true){
			choicemiddlecard == false;
			choiceleftcard == false;
		}	
			
		else{
			
			choicerightcard = true;
		}
		console.log(choicerightcard);
		
		});
	
		
	//confirmation
		$('#confirmation').click(function(){
			
		start();	
		});
	


	//Play game
	
	function start(){
		
		var random = Math.floor(Math.random() * cardArray.length);
		var computerChoice = cardArray [random];
		console.log(cardArray[random]);
		
		
		
	} 
	
	//left card choice
		
	if (choiceleftcard == true)
			if (computerChoice == "Card1"){
				$('h3').text('You Win Try Again?')
			}
	else if(computerChoice == "Card2"){
		$('h3').text('You Loose Try Again?');
		}
		else if(computerChoice == "Card3"){
			$('h3').text('You Loose Try Again?');
		
	}
	
	
	//Middle Card Choice 
	
	if (choicemiddlecard == true)
			if (computerChoice == "Card2"){
				$('h3').text('You Win Try Again?')
			}
	else if(computerChoice == "Card1"){
		$('h3').text('You Loose Try Again?');
		}
		else if(computerChoice == "Card3"){
			$('h3').text('You Loose Try Again?');
		
	}
	
	// right card Choice
	
	
	if (choicerightcard == true)
			if (computerChoice == "Card3"){
				$('h3').text('You Win Try Again?')
			}
	else if(computerChoice == "Card1"){
		$('h3').text('You Loose Try Again?');
		}
		else if(computerChoice == "Card2"){
			$('h3').text('You Loose Try Again?');
		
	}
	
	});

    