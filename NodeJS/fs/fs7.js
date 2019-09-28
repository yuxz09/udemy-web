//删除一个文件或者目录

const fs = require('fs')

//logs下面有文件不能直接删除logs目录
fs.readdirSync('logs').map((file) => {
	fs.unlink(`logs/${file}`, (error) => {
		if(error)
		{
			console.log(error)
		}
		else
		{
			console.log(`delete file okay: ${file}`)
		}
	})
})


fs.rmdir('logs', (error) => {
	if(error)
	{
		console.log(error)
	}
	else
	{
		console.log('delete dir okay: logs')
	}
})