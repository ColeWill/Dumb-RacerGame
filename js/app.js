console.log("js is linked");
//$('#theDiv').prepend('<img id="theImg" src="theImg.png" />')

/*$("button").click(function(){
    $("p").text("Hello world!");
}); */
//grabs reset class adds click func then grabs all td and changes text to +
$('.reset').click(function(){
	$('td').removeAttr('img');
	console.log(img);
});




// grads all "td" cells and adds a click function inserts x as text


var playerXList = [];
var playerOList = [];


function checkWin(p, arrayPassedIn){
	console.log("running");
	//if 
	if(        (arrayPassedIn.indexOf("0") != -1) 
			&& (arrayPassedIn.indexOf("1") != -1)  
			&& (arrayPassedIn.indexOf("2") != -1) ){
		$('h2').text(p + " has won");
	alert(p + " has won");
	}
}


 $('.X').click(function(){
	$('td').unbind().click(function(){
	$(this).prepend('<img class="image" src="https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png" width="30" height="30"/>');
	var clickedX = $(this).attr('id');
	playerXList.push(clickedX);
	console.log(playerXList);
	checkWin("p x", playerXList);
	});
});



$('.O').click(function(){
	$('td').unbind().click(function(){
		 $(this).prepend('<img class="image" id="xImage" src="https://img.clipartfest.com/8156fafb1f08c5557e1ad816d4ef6cc7_cyrillic-letter-o-clipart-fancy-letter-o-clipart_900-863.png" width="30" height="30"/>');
		 var clickedO = $(this).attr('id');
		 playerOList.push(clickedO);
		 console.log(playerOList);
		 checkWin("p o", playerOList);
		 		});
});

//make id of cell = variable, push into array for playerO check to see if win condition is met

//if i add a class with a click if certain squares meet win condition
















//document.getElementById("demo").innerHTML = "Hello World!";

	







//for loop
//for(i =0 ; i < cell.length; i++){
//var cellClicked = cell[i].addEventListener("click",write);}













//try to make 