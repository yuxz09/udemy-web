//使用cheerio，爬虫



var https = require('https')
var cheerio = require('cheerio')
var url = 'https://www.lagou.com/'

function filterMenu(html)
{
	var $ = cheerio.load(html)
	var menu = $('.menu_main')//class selector
	var menuData = []
	menu.each(function(index, value){
		var menuTitle = $(value).find('h2').text()//
		var menuLists = $(value).find('a')
		var menuList = []
		menuLists.each(function(index, value){//Cheerio loop over elements
			menuList.push($(value).text())
		})
		menuData.push({
			menuTitle: menuTitle,
			menuList: menuList
		})//每一个menuData元素，里面存放的object有menuTitle, menuList array
	})
	return menuData;
}

function printMenu(menu)//menu array, menuData array
{
	menu.forEach(function(value){
		console.log(value.menuTitle + '\n')
		value.menuList.forEach(function(value){
			console.log(value)
		})
	})
}

https.get(url, function(res){
	var html = ''
	res.on('data', function(data){
		html += data
	})

	res.on('end', function(){
		var result = filterMenu(html)
		printMenu(result)
	})

	res.on('error', function(err){
		console.log(err)
	})
})


