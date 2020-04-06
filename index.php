<!doctype html>
<html>
  <head>
  	<title>Rock Paper Scissors</title>
  	<link rel="stylesheet" type="text/css" href="css.css">
  	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  	<script src="js.js"></script>
  </head>
  <body>
  	<div id="container">
  		<div id="playerScoreText">
  		<h1>Player </h1>
  		<p id="playerScore">0</p>
  		</div>
  		<div id="computerScoreText"> 
  		<h1>Computer </h1>
  		<p id="computerScore">0</p>
  		</div>
  	</div>
  	<div id="winText">
  		<p id="wins">start</p>
  	</div>
  	<div id="pictureDiv">
  		<img id="player" src="rock.png" >
  		<img id="pc" src="rock.png">
  	</div>
  	<div align="center">
  		<button id="rock" class="btn">Rock</button>
  		<button id="paper" class="btn">Paper</button>
  		<button id="scissors" class="btn">Scissors</button>
  	</div>
  	<div id="playAgainDiv">
  		<button id="rest" class="btn">Play Again</button>
  	</div>
  </body>
</html>