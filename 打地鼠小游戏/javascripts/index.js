$(document).ready(function(){

	
});	

function show(){
		var ran=Math.ceil(Math.random()*9);
		console.log(ran)
		switch(ran){
			case 1:$(".hole1").addClass("show");break;
			case 2:$(".hole2").addClass("show");break;
			case 3:$(".hole3").addClass("show");break;
			case 4:$(".hole4").addClass("show");break;
			case 5:$(".hole5").addClass("show");break;
			case 6:$(".hole6").addClass("show");break;
			case 7:$(".hole7").addClass("show");break;
			case 8:$(".hole8").addClass("show");break;
			case 9:$(".hole9").addClass("show");break;
		}
	}

$(".container div").click(function(){
	var a=this;
	$(a).removeClass("show");
	$(a).addClass("hide");
	setTimeout(function(){$(a).removeClass("hide");},800);
})

var a;

$(".easy").click(function(){
	clearInterval(a);
	a=setInterval(function(){show()},2000)
})

$(".normal").click(function(){
	clearInterval(a);
	a=setInterval(function(){show()},1000)
})

$(".difficult").click(function(){
	clearInterval(a);
	a=setInterval(function(){show()},500)
})