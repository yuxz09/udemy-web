var button = document.querySelector("button");
//var isPurple = false;

//button.addEventListener("click", function(){
	//alert("clicked!");
//	if(isPurple)
//	{
//		document.body.style.background = "white";	
	//	isPurple = false;	
//	}
//	else
//	{
//		document.body.style.background = "purple";
	//	isPurple = true;
//	}
//	isPurple = !isPurple;
//});

	button.addEventListener("click", function(){
		//DOM Element classList
		//https://www.w3schools.com/jsref/prop_element_classlist.asp
		document.body.classList.toggle("purple");
		//if the body doesn't have the class named purple it will add it
		//if it does have the class name purple already, it will remove it
	});

