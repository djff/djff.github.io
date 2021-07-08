$(function(){
	// change game state when to playing when start button is clicked.
	$("#start").click(function(){
		GAME_STATE_PLAYING = true;
		failedState(false);
		$("#status").text('Click the "S" to begin.');
	})

	$(".boundary")
		.mouseover(function(){
			if(GAME_STATE_PLAYING){
				failedState(true);
				GAME_STATE_PLAYING = false;
				$("#status").text('Sorry, you lost, :[, Click the "S" to continue.');
			}
		})

	$("#end")
		.mouseover(function(){
			if(GAME_STATE_PLAYING){
				GAME_STATE_PLAYING = false;
				$("#status").text('You win!! Click the "S" to continue.');
				$("#status").text('Sorry, you lost, :[, Click the "S" to continue.');
			}
		})

	$("#maze")
		.mouseleave(function(){
			if(GAME_STATE_PLAYING){
				failedState(true);
				$("#status").text('Sorry, you lost, :[, Click the "S" to continue.');
			}
		})
})


let GAME_STATE_PLAYING = false;
const failedState = (lost) => {
	$(".boundary")
		.each(function(){
			if(lost){ $(this).addClass("youlose") }
			else { $(this).removeClass("youlose")}
		})
}
