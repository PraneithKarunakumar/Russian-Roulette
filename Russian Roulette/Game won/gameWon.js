
/*
Praneith Karunakumar
November 8th 10:30pm
the basic  code winning button

*/
//the stuff below holds all the styles and attributes to the mouse
options = {
"cursorOuter": "circle-basic",
"hoverEffect": "circle-move",
"hoverItemMove": false,
"defaultCursor": false,
"outerWidth": 30,
"outerHeight": 30
  };
$(document).ready(function($){//jquarys start of document
	$('#REPLAY').click(function(event){//when button pressed the following happends

		window.location.replace("../index.html")//automatically goes to game
		
	});
	$('#home').click(function(event){//when button pressed the following happends

		window.location.replace("../../index.html")//automatically goes to homepage
		
	});
	magicMouse(options);// intilizing the magic mouse option it will keep on doing those options  for the mouse and it will stay like that until your delete the browser
});//end of jquary scene