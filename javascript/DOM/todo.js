var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++)
{
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("selected");
	//	this.style.color = "green";
	});
	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("selected");
	//	this.style.color = "black";
	});	
	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");//add class done if thisevent does not have
	});
}


/*
firstLI.addEventListener("mouseover", function(){
	firstLI.style.color = "green";
});

firstLI.addEventListener("mouseout", function(){
	firstLI.style.color = "black";
});
*/