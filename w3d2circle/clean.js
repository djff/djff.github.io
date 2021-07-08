$(function(){

	$("#start").click(function(){
		const BODY_WIDTH = parseInt($("#container").css("width"));
		const BODY_HEIGHT = parseInt($("#container").css("height"));
		const radius = $("#width").val();
		const growth = $("#growth").val();
		const rate = $("#rate").val();
		const number = $("#number").val();
		const elts = []
		for(let i=0; i<number; i++){
			elts.push(
				$('<div>', 
				{
					"css":{

						'width': radius + "px",
						'height': radius + "px",
						'top': getPosition(BODY_HEIGHT) + "px",
						'right': getPosition(BODY_WIDTH) + "px",
						'position': 'absolute',
						'border-radius': radius + "px",
						'background-color': COLORS[Math.floor(Math.random() * (COLORS.length-1))]
					},
					"click": function(){
						console.log($(this).attr("timer"));
						clearInterval($(this).attr("timer"));
						this.remove();
					},
					"mouseenter": function(){
						$(this).css("opacity", "0.5");
					},
					"mouseleave": function(){
						$(this).css("opacity", "1.0");
					}
				})
			);
			elts[i].attr({
				"data-growth-rate": rate,
				"timer": setInterval(growElement, growth, elts[i])
			});
		}

		$("#container").append(elts);
	});

})
	
const COLORS=["#f44336","#e81e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b","#D32F2F","#AD1457","#4A148C","#283593","#0D47A1","#01579B","#006064","#004D40","#1B5E20","#33691E","#827717","#F57F17","#FF6F00","#E65100","#BF360C","#3E2723","#212121","#263238"];
const getPosition = (max) => Math.ceil(Math.random() * max);

const growElement = (elt) => {
	const growth = parseInt(elt.attr("data-growth-rate"));
	const width = parseInt(elt.css("width")) + growth;
	const height = parseInt(elt.css("height")) + growth;

	elt.css({
		"width": width,
		"height": height,
		"border-radius": width
	})
}






