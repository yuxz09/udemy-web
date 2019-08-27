//alert("connected");


//check off specific todos by clicking
$("ul").on("click", "li", function(){
	//if li is gray, turn it black
	//else turn it gray
	
	$(this).toggleClass("completed");
	
	/*
	if($(this).css("color") === "rgb(128, 128, 128)")///////////
	{
		$(this).css({ //////////////
			color: "black",
			textDecoration: "none"
		});
	}
	else
	{
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}
	*/
});


//click on X to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();

	});
	//如果没有parent(), 则会只remove span
	//remove it until it fade out
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");//clear the input text box
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")	
		////append() take a string of html and will append those elements
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();	

});



/*
click() only adds listeners for existing elements
on() will add listeners for all potential future elements

 */










