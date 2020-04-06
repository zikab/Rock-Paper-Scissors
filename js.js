$(document).ready(function(){
	var playerScore = 0;
	var computerScore = 0;
	const playerHand = document.querySelector("#player");
	const pcHand = document.querySelector("#pc");
	
	//changing picture by clicking buttons 
	$("#rock").click(function() {	

		$("#player").attr("src","rock.png");
		check(1);
	});
		$("#paper").click(function() {
	    $("#player").attr("src","paper.png");
	    check(2);
	});
	$("#scissors").click(function() {
	    $("#player").attr("src","scissors.png");
	    check(3);
	});
	//1 is rock, 2 is paper, 3 is scisscors
	function check(id){
		//id2 for the computer, id for the player
		var id2 = Math.floor(Math.random() * 3) + 1;
		if(id2==1){
			$("#pc").attr("src","rock.png");
		}else if(id2==2){
			$("#pc").attr("src","paper.png");
		}else{
			$("#pc").attr("src","scissors.png");
		}
		//check who wins
		if(id==id2){
			$("#wins").text( "Tie" );
		}else if((id==1 && id2==3) || (id==2 && id2==1) || (id==3 && id2==2)){
			$("#wins").text( "Player Wins" );
			playerScore++
			$("#playerScore").text(playerScore);
		}else{
			$("#wins").text( "Computer Wins" );
			computerScore++
			$("#computerScore").text(computerScore);
		}
	}
	//play again to reset scores to 0
	$("#rest").click(function() {
	    playerScore =0;
		computerScore =0;
		$("#playerScore").text(playerScore);
		$("#computerScore").text(computerScore);
		$("#wins").text("start");
		$("#player").attr("src","rock.png");
		$("#pc").attr("src","rock.png");
	});
});