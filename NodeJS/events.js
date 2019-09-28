//更新， 发布

const EventEmitter = require('events')

class Player extends EventEmitter{}

var player = new Player()//EventEmitter的实例化

player.once('play', (track) => {
	console.log(`正在播放:《${track}》`)
})


//Synchronously calls each of the listeners registered for the event 
//named eventName, in the order they were registered, 
//passing the supplied arguments to each.
player.emit('play', '精绝古城')
player.emit('play', '黄皮子坟')
