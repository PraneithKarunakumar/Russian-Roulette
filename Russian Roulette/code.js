alert( "to win russian roulette you have to either kill your partner for a sum amount of money or have both of you survive to get to that ONE MILLION Dollars  to pay your fine for tax evasion");
let y=0;
let money =0;
let turn =3;
let barrel = Math.round(1+Math.random()*5);//random value for barrel
let aligner = Math.round(1+Math.random()*5);//random value for alligner

//the stuff below holds all the styles and attributes to the mouse
option = {
"cursorOuter": "circle-basic",
"hoverEffect": "circle-move",
"hoverItemMove": false,
"defaultCursor": false,
"outerWidth": 30,
"outerHeight": 30
  };
 $(document).ready(function($){//start of jquary functions
	$('#spin').click(function(event){
		turn--;
		new Audio('sound effects/spin.mp3').play()//plays the audio by making a new audio sound
		console.log(money+"$");
		barrel = Math.round(1+Math.random()*5);
		aligner = Math.round(1+Math.random()*5);
		//console.log(barrel+"   "+ aligner);
		
	});
	$('#shootpartner').click(function(event){
		turn--;
		if(turn!=0){
			if(barrel==aligner){
				
				new Audio('sound effects/shot.mp3').play()
				y=y+1;
				$(".partner").append("<P> <b> you Won</b></p>")
				$(".partner").append(" <b> total money of $ </b>"+ money +"<b> before Kill</b>")// it will put up this function when something happends
				setTimeout(function(){//delayfunction
				window.location.replace("Game won/gameWon.html");//will go to this page when the function has been done
				}, 1500);
				
			}
			else if (barrel!= aligner){
				
				barrel=barrel+1;//keeps one going up by 1 slot whenevr shooting like a revolver
				 money = money+500;// money increases when you take the risk and dont die
				 console.log(money+"$");
				new Audio('sound effects/click.mp3').play()
				$(".partner").append("$"+money+"<br>")
				
				//console.log(barrel+"   "+ aligner);

				if (barrel==7) {//when barrel has the value 7 it will automatically start at 1 again like an actual revolver
					barrel=barrel-6;
					//console.log(barrel+"   "+ aligner);
				}

			}
		}
	});
	$('#shootyourself').click(function(event){
		turn--;
		if(barrel==aligner){
			
			new Audio('sound effects/shot.mp3').play()
			y=y+1;
			$(".partner").append("<P> <b> you lost</b></p>")
			$(".partner").append("<b> total money of $ </b>"+ money +"<b> before death</b>")
			setTimeout(function(){
			window.location.replace("Game over/gameover.html");
			}, 1500);
		}
		else if (barrel!= aligner){
			$(".partner").append("<P><b>click</b></p>")			
			barrel=barrel+1;
			money = money+1000;
			console.log(money+"$");
			new Audio('sound effects/click.mp3').play()
			$(".partner").append("$"+money+"<br>")
			
			//console.log(barrel+"   "+ aligner);

			if (barrel==7) {
				barrel=barrel-6;
				//console.log(barrel+"   "+ aligner);
			}
		}
	});
	if (money==1000000) {
		$(".partner").append("<P><b> you won</b></p>")
		setTimeout(function(){
		window.location.replace("Game won/gameWon.html");
		}, 1000);
	}
	$('#pass').click(function(event){
	money = money+2000;
	$(".partner").append("$"+money+"<br>")
	while(y=1){
		const descisions = ["shootYourself", "ShootPart", "spin", "pass"];
		const random = Math.floor(Math.random() * descisions.length);
		console.log(random);
		
		if (random==0) {
			$(".partner").append("<P><b> he puts  the gun to his head and pulls the trigger</b></p>")

				if(barrel==aligner){
					
					y=y+1;
					new Audio('sound effects/shot.mp3').play()
					$(".partner").append("<P> <b> you Won </b></p>")
					
					setTimeout(function(){
					window.location.replace("Game won/gameWon.html");
					}, 1500);
					break;

				}
				else if (barrel!= aligner){
					$(".partner").append("<P><b>click</b></p>")

					barrel=barrel+1;
					new Audio('sound effects/click.mp3').play()
					
					//console.log(barrel+"   "+ aligner);

					if (barrel==7) {
						barrel=barrel-6;
						//console.log(barrel+"   "+ aligner);
					}
				}

		}

		else if (random==1) {
			$(".partner").append("<P> <b> The partner points the gun at you and pulls the trigger </b> </p>")

				if(barrel==aligner){
					
					new Audio('sound effects/shot.mp3').play()
					$(".partner").append("<P> <b> you lost</b> </p>")

					setTimeout(function(){
					window.location.replace("Game over/gameover.html");
					}, 1500);
					break;

				}
				else if (barrel!= aligner){
					$(".partner").append("<P><b>click</b></p>")
					barrel=barrel+1;
					new Audio('sound effects/click.mp3').play()
					
					//console.log(barrel+"   "+ aligner);

					if (barrel==7) {
						barrel=barrel-6;
						//console.log(barrel+"   "+ aligner);
					}
				}

		}

		else if (random==2) {
				new Audio('sound effects/spin.mp3').play()
				let barrel = Math.round(1+Math.random()*5);
				let aligner = Math.round(1+Math.random()*5);
		}

		else if (random==3) 
		{
			$(".partner").append("<P><b>The partner gives gun to you</b></p>")
			break;
		}

		}

	});
	magicMouse(option);// intilizing it will keep on doing those options  for the mouse and it will stay like that until your delete the browser

});//end of jquary document







