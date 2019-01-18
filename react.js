var i =document.getElementsByClassName("button");
function hideAll(){
	var i =document.getElementsByClassName("button");
	for( var n in i){
	      i[n].style.visibility = "hidden";
	}
}
hidden = 0;
function touchleft(){if(a==0){a=1;}}
function touchright(){if(a==0){a=2;}}
function touchtopleft(){if(b==0){b=1;}}
function touchtopright(){if(b==0){b=2;}}
function toggleMusic(){if(play==0){play=1;}else{play=0;}}
function toggleEffects(){if(effects==0){effects=1;}else{effects=0;}}
document.getElementById('touchL').style.left = "0%";
document.getElementById('touchL').style.top = "50%";

document.getElementById('touchR').style.left = "50%";
document.getElementById('touchR').style.top = "50%";

document.getElementById('touchTL').style.left = "0%";
document.getElementById('touchTL').style.top = "0%";

document.getElementById('touchTR').style.left = "50%";
document.getElementById('touchTR').style.top = "0%";
blink = 1;
boot = 0;
restart = 0;
gamemode = 0;
effects = 0;
Visibility = 0;
document.getElementById('mode1').style.left = "1%";
document.getElementById('mode1').style.top = "10%";
document.getElementById('mode2').style.left = "1%";
document.getElementById('mode2').style.top = "22%";
document.getElementById('homescreen').style.left = "16%";
document.getElementById('homescreen').style.top = "10%";
document.getElementById('restart').style.left = "16%";
document.getElementById('restart').style.top = "22%";
document.getElementById('play').style.width = "60%";
document.getElementById('play').style.height = "40%";
document.getElementById('play').style.left = "20%";
document.getElementById('play').style.top = "30%";
document.getElementById('play').style.fontSize ="16vh"
// audio
play = 0;
document.getElementById('bgmusic').style.visibility="hidden";
//settings
document.getElementById('settings').style.left = "0%";
document.getElementById('settings').style.top = "1%";
document.getElementById('homescreenS').style.left = "0%";
document.getElementById('homescreenS').style.top = "1%";
document.getElementById('Left').innerText = "Color of Left Wall";
document.getElementById('Left').style.left="6%";
document.getElementById('Left').style.top= "10%";
document.getElementById('Right').innerText = "Color of Right Wall";
document.getElementById('Right').style.left="76%";
document.getElementById('Right').style.top= "10%";
// audio
document.getElementById('Audio').innerText = "Music";
document.getElementById('Audio').style.left="83%";
document.getElementById('Audio').style.top= "54%";

document.getElementById('Effects').innerText = "SoundEffects";
document.getElementById('Effects').style.left="79%";
document.getElementById('Effects').style.top= "74%";

document.getElementById('audio').style.left = "80%";
document.getElementById('audio').style.top = "62%";

document.getElementById('effects').style.left = "80%";
document.getElementById('effects').style.top = "84%";
//colorSettings
document.getElementById('red').style.left = "8%";
document.getElementById('red').style.top = "18%";
document.getElementById('orange').style.left = "8%";
document.getElementById('orange').style.top = "30%";
document.getElementById('yellow').style.left = "8%";
document.getElementById('yellow').style.top = "42%";

document.getElementById('blue').style.left = "80%";
document.getElementById('blue').style.top = "18%";
document.getElementById('green').style.left = "80%";
document.getElementById('green').style.top = "30%";
document.getElementById('megenta').style.left = "80%";
document.getElementById('megenta').style.top = "42%";
//credits
document.getElementById('cred').innerText = "Reaction";
document.getElementById('cred').style.left = "35%";
document.getElementById('cred').style.top = "0%";
document.getElementById('cred').style.fontSize = "16vh";
// game variables
const canvas  = document.getElementById('react');
document.getElementById('react').style.visibility="hidden";
document.getElementById('react').style.position = "absolute";
document.getElementById('react').style.left = "32%";
document.getElementById('react').style.top = "10%";
document.getElementById('score').style.left = "90%";
document.getElementById('score').style.top = "0%";
const context = canvas.getContext('2d');
bg = '#000';
debug = '#0';
p = 0;
mode = 'Orginal';
increase = 1; 
increment = 0.015;
//gamemode1 variables
const player  = {pos: {x: (canvas.width-30)/2, y: 40}};
color = Math.random() + 1.5;
leftwall = '#FF0000';
rightwall= '#0000FF';
color = Math.random() + 1.5;
if(color<2){col = leftwall;}
if(color>2){col = rightwall;}
a = 0;
//game variables
player.score = 0;
player.lives = 5;
// gamemode 2 variables
const playerB = {pos: {x: (canvas.width-30)/2, y: 80}};
colorB = Math.random() + 1.5;
if(colorB<2){colB = '#FF4500';}
if(colorB>2){colB = '#6B8E23';}
b = 0;
debugB = 0;
pB = 0;
function gamemodenull(){
	function draw() {
	    	context.fillStyle = bg;
	    	context.fillRect(0, 0, canvas.width, canvas.height);

	   		context.fillStyle = leftwall;
	    	context.fillRect(0,0,30,canvas.height);

	    	context.fillStyle = rightwall;
	    	context.fillRect(canvas.width-30,0,30,canvas.height);

	   		context.fillStyle = col;
	   		context.fillRect(player.pos.x,player.pos.y,30,30)
	}
	draw();
}
function gamemode1(){
	function draw() {
	    	context.fillStyle = bg;
	    	context.fillRect(0, 0, canvas.width, canvas.height);

	   		context.fillStyle = leftwall;
	    	context.fillRect(0,0,30,canvas.height);

	    	context.fillStyle = rightwall;
	    	context.fillRect(canvas.width-30,0,30,canvas.height);

	   		context.fillStyle = col;
	   		context.fillRect(player.pos.x,player.pos.y,30,30)
	}
	function updateScore() {
		document.getElementById('Screen').innerText = "Gamemode: "+mode;
		document.getElementById('Screen').style.position = "absolute";
		document.getElementById('Screen').style.left="0%";
		document.getElementById('Screen').style.top= 0;
    	document.getElementById('score').innerText = "Score: " + player.score + "    Lives: " + player.lives;
    	document.getElementById('score').style.position="absolute";
    	document.getElementById('score').style.left="70vh";
    	if(player.lives == 0 || restart == 1 && gamemode == 1){
    		if(effects==1){document.getElementById('boot').play('boot.mp3');}
    		color = Math.random() + 1.5;
    		if(color<2){col = leftwall;}
			if(color>2){col = rightwall;}
    		player.lives = 5;
    		player.score = 0;
    		increase = 1;
    		player.pos.x = (canvas.width-30)/2;
    		player.pos.y = 40;
    		restart = 0;
    		a=0;
    	}
	}
	function playerCommand(){
		document.addEventListener('keydown', event => {
		if (event.keyCode === 37 && p == 0 && a == 0) {a = 1;}
		if (event.keyCode === 39 && p == 0 && a == 0) {a = 2;}
		if (p == 0 || gamemode == 1) { if (event.keyCode === 38) {p = 1; debug = color; col = '#4B0082';}}
		if (p == 1 && a >= 1) { if (event.keyCode === 40) {p = 0;if(color<2){col = leftwall;};if(color>2){col = rightwall;}; }}
		if (p == 1 && a == 0) { if (event.keyCode === 40) {p = 0; 
			color = Math.random() + 1.5;
			if(color<2){col = leftwall;}
			if(color>2){col = rightwall;}}}
		});
		if(a==0 && p==0){player.pos.y = player.pos.y + increase; 
			if(p == 0 && increase < 40){increase = increase + increment;}}
		if(a==1 && p==0){player.pos.x = player.pos.x - increase;}
		if(a==2 && p==0){player.pos.x = player.pos.x + increase;}
	}
	function collison(){
		if(player.pos.y > canvas.height-30){
			player.pos.x = (canvas.width-30)/2;
			player.pos.y = 15;
			player.lives = player.lives - 1;
			if(effects==1){document.getElementById('error').play('error.mp3');}
			color = Math.random() + 1.5;
			if(color<2){col = leftwall;}
			if(color>2){col = rightwall;}
		}
		if(player.pos.x < 30){
			player.pos.x = (canvas.width-30)/2;
			player.pos.y = 15;
			a = 0;
			if(color < 2){player.score +=  10;if(effects==1){document.getElementById('points').play('points.mp3');}}
			if(color > 2){player.lives -= 1;if(effects==1){document.getElementById('error').play('error.mp3');}}
			color = Math.random() + 1.5;
			if(color<2){col = leftwall;}
			if(color>2){col = rightwall;}
		}
		if(player.pos.x > canvas.width-60){
			player.pos.x = (canvas.width-30)/2;
			player.pos.y = 15;
			a = 0;
			if(color < 2){player.lives -= 1;if(effects==1){document.getElementById('error').play('error.mp3');}}
			if(color > 2){player.score +=  10;if(effects==1){document.getElementById('points').play('points.mp3');}}
			color = Math.random() + 1.5;
			if(color<2){col = leftwall;}
			if(color>2){col = rightwall;}
		}
	}
	playerCommand();
    draw();
    updateScore();
    collison();
}
function gamemode2(){
	function draw(){
		context.fillStyle = colB;
   	    context.fillRect(playerB.pos.x,playerB.pos.y,30,30) 
   	    context.fillStyle = '#FF4500';
    	context.fillRect(15,0,15,canvas.height);
    	context.fillStyle = '#6B8E23';
    	context.fillRect(canvas.width-30,0,15,canvas.height);
	}
	function playerCommand(){
		document.addEventListener('keydown', event =>{
		if (event.keyCode === 65 && pB == 0 && b == 0) {b = 1;}
		if (event.keyCode === 68 && pB == 0 && b == 0) {b = 2;}
		if(pB==0){if (event.keyCode === 38) {debugB = colorB; colB = '#4B0082';pB = 1;} }
		if (pB == 1 && b >= 1) { if (event.keyCode === 40) {pB = 0; if(colorB<2){colB = '#FF4500';};if(colorB>2){colB = '#6B8E23';};}}
		if (pB == 1 && b == 0) { if (event.keyCode === 40) {pB = 0; 
			colorB = Math.random() + 1.5;
			if(colorB<2){colB = '#FF4500';}
			if(colorB>2){colB = '#6B8E23';}}}
		});
		if(b==0 && p==0){playerB.pos.y = playerB.pos.y + increase;}
		if(b==1 && p==0){playerB.pos.x = playerB.pos.x - increase;}
		if(b==2 && p==0){playerB.pos.x = playerB.pos.x + increase;}
	}
	function collison(){
		if(playerB.pos.y > canvas.height-30){
			playerB.pos.x = (canvas.width-30)/2;
			playerB.pos.y = 15;
			player.lives = player.lives - 1;
			if(effects==1){document.getElementById('error').play('error.mp3');}
			colorB = Math.random() + 1.5;
			if(colorB<2){colB = '#FF4500';}
			if(colorB>2){colB = '#6B8E23';}
		}
		if(playerB.pos.x < 30){
			playerB.pos.x = (canvas.width-30)/2;
			playerB.pos.y = 15;
			b = 0;
			if(colorB < 2){player.score +=  10;if(effects==1){document.getElementById('points').play('points.mp3');}}
			if(colorB > 2){player.lives -= 1;if(effects==1){document.getElementById('error').play('error.mp3');}}
			colorB = Math.random() + 1.5;
			if(colorB<2){colB = '#FF4500';}
			if(colorB>2){colB = '#6B8E23';}
		}
		if(playerB.pos.x > canvas.width-60){
			playerB.pos.x = (canvas.width-30)/2;
			playerB.pos.y = 15;
			b = 0;
			if(colorB < 2){player.lives -= 1;if(effects==1){document.getElementById('error').play('error.mp3');}}
			if(colorB > 2){player.score +=  10;if(effects==1){document.getElementById('points').play('points.mp3');}}
			colorB = Math.random() + 1.5;
			if(colorB<2){colB = '#FF4500';}
			if(colorB>2){colB = '#6B8E23';}
		}
		if(player.pos.y == playerB.pos.y){
			player.pos.y = 40;
			playerB.pos.y = 80;
		}
	}
	function updateScore(){
		document.getElementById('Screen').innerText = "Gamemode: "+mode;
		if(player.lives == 0 || restart == 1 && gamemode == 3){
			if(effects==1){document.getElementById('boot').play('boot.mp3');}
			color = Math.random() + 1.5;
    		if(color<2){col = leftwall;}
			if(color>2){col = rightwall;}
			colorB = Math.random() + 1.5;
			if(colorB<2){colB = '#FF4500';}
			if(colorB>2){colB = '#6B8E23';}
    		player.lives = 10;
    		player.score = 0;
    		increase = 1;
    		player.pos.x = (canvas.width-30)/2;
    		player.pos.y = 40;
    		playerB.pos.x = (canvas.width-30)/2;
    		playerB.pos.y = 80;
    		restart = 0;
    		a=0;
    		b=0;
    	}

	}
	updateScore();
	draw();
	playerCommand();
	collison();
}

function update(time = 0){
	console.log();
	if(blink==0){
		if(effects==1){document.getElementById('click').play('click.mp3');}
		blink=1;
	}
	if(play == 1){
		document.getElementById('bgmusic').play('MainTheme.mp3');
	}
	if(play == 0){
		document.getElementById('bgmusic').pause('MainTheme.mp3');
	}
	if(gamemode ==1 || gamemode ==3 || gamemode == 2 || gamemode == 4){
		if(boot==1 && effects==1){
			document.getElementById('boot').play('boot.mp3');
			boot=0;
		}

		mode = "Orginal";
		document.getElementById('mode1').style.visibility="visible";
		document.getElementById('mode2').style.visibility="visible";
		document.getElementById('react').style.visibility="visible";
		document.getElementById('homescreen').style.visibility="visible";
		document.getElementById('score').style.visibility="visible";
		document.getElementById('Screen').style.visibility="visible";
		document.getElementById('restart').style.visibility="visible";
		document.getElementById('touchL').style.visibility="visible";
		document.getElementById('touchR').style.visibility="visible";
		document.getElementById('cred').style.visibility="hidden";
		gamemode1();
		if(gamemode == 2){
			restart = 1;
			gamemode =3;
			player.lives = 10;
		}
		if(gamemode == 3){
			mode = "Doubles";
			gamemode2();
			if(restart == 1){
				restart = 2;
			}
		}
	}
	if(gamemode == 0){
		document.getElementById('audio').style.visibility="hidden";
		document.getElementById('effects').style.visibility="hidden";
		document.getElementById('Effects').style.visibility="hidden";
		document.getElementById('settings').style.visibility="visible";
		document.getElementById('play').style.visibility="visible";
		document.getElementById('cred').style.visibility="visible";
		document.getElementById('react').style.visibility="hidden";
		document.getElementById('score').style.visibility="hidden";
		document.getElementById('Screen').style.visibility="hidden";
		document.getElementById('Left').style.visibility="hidden";
		document.getElementById('Right').style.visibility="hidden";
		document.getElementById('Audio').style.visibility="hidden";
		if(restart=0){
			restart=1;
			color = Math.random() + 1.5;

		}
		if(color<2){col = leftwall;}
		if(color>2){col = rightwall;}
		p = 1;
		player.lives = 5;

	}
	if(gamemode == -1){
		col = '#4B0082';
		document.getElementById('cred').style.visibility="hidden";
		document.getElementById('homescreenS').style.visibility="visible";
		document.getElementById('react').style.visibility="visible";
		document.getElementById('Left').style.visibility="visible";
		document.getElementById('Right').style.visibility="visible";
		document.getElementById('blue').style.visibility="visible";
		document.getElementById('green').style.visibility="visible";
		document.getElementById('megenta').style.visibility="visible";
		document.getElementById('red').style.visibility="visible";
		document.getElementById('orange').style.visibility="visible";
		document.getElementById('yellow').style.visibility="visible";
		document.getElementById('Audio').style.visibility="visible";
		document.getElementById('audio').style.visibility="visible";
		document.getElementById('effects').style.visibility="visible";
		document.getElementById('Effects').style.visibility="visible";
		gamemodenull();
	}
	requestAnimationFrame(update);
}
update();