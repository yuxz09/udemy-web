//重命名

const fs = require('fs')

fs.rename('logs/hello.log', 'logs/greeting.log', (error) => {
	if(error)
	{
		console.log(error)
	}
	else
	{
		console.log('rename okay')
	}

})