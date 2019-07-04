//window.setTimeout(function() {
// put all of your JS code from the lecture here
//}, 500);解决html提供instructions不显示问题
var todos = [];//if want to access the todos variable from chrome developer console, put it in global scope
window.setTimeout(function()
{
	var input = prompt("what would you like to do");
	while(input != "quit")
	{
		if(input === "new")
		{
			addTodo();
		}
		else if(input == "list")
		{
			listTodos();
		}
		else if(input == "delete")
		{
			del();
		}
		input = prompt("what would you like to do");
	}
	console.log("Ok, you quit the app");
},500);

function listTodos()
{
	todos.forEach(function(todo, i)
	{
		console.log(i + ": " + todo);
	});	
}

function addTodo()
{
	var newtodo = prompt("add a new todo");
	console.log("addTodo: " + newtodo);
	todos.push(newtodo);	
}

function del()
{
	var index = prompt("enter index of todo to delete");
	console.log("deleteTodo: " + index + " " + todos[index]);
	todos.splice(index, 1);
}