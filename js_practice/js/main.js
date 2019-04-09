// JavaScript Document
$(document).ready(function(){
	 $('#listName').mouseenter(function()
      {
        $('#listName').addClass('blue');
        $('#listTitle').css('color', 'white');
      });
    $('#listName').mouseleave(function()
      {
        $('#listName').removeClass('blue');
        $('#listTitle').css('color', 'black');
      });

            //Plays the file when the mouse is over the element
            $("#song5").hover (function (){

                $("#LaLaLa")[0].play();

            });

            //Pause the file when the mouse leaves the element
             $("#song5").mouseleave (function (){

                $("#LaLaLa")[0].pause();

            });
	
		
			//Plays the file when the mouse is over the element
			$("#song5").hover (function(){
				$("#yocheckthisout")
				
			}
	
	$('h1').css('color', 'green');

	//$('h1').css('color', 'white');
$('h1').click(function() {
	$('h1').css('color', 'green');
	
	});
	
	$('#song5').togggleClass('black');
	
});

	
	$