var event = require('events')
var evente=new event.EventEmitter()
var eventh=function(){
    console.log('i HEAR SOMEONE calling my name')
}
evente.on('name',eventh)
evente.emit('name')