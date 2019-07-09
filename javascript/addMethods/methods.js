//https://underscorejs.org
var comments = {};//declare object
comments.data = ["good job!", "bye", "hahah"];
function print(arr)
{
	arr.forEach(function(el)
	{
		console.log(el);
	});
}

//add methods to object
//object, comments
//print, function name

comments.print = function()
{
	this.data.forEach(function(el)
	{
		console.log(el);
	});
	console.log("from print() function");
}

//function()//this is a function statement, which requires a function name
//{
//	this.data.forEach(function(el)//this refers to object comments
//	{
//		console.log(el);
//	});
//}


//print(comments.data);

comments.print()
