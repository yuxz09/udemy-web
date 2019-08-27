/* 
$("button").on("click", function(){
	$('div').fadeOut(1000);
});//just hide them, div still in body, just display set to be none

*/

$("button").on("click", function(){
	$('div').fadeOut(1000, function(){
		$(this).remove();
	});
});//为了让fadeout效果结束后再显示语句
