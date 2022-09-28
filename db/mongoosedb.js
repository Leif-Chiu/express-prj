const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://192.168.1.113:27017/express', {
    authSource: 'admin',
    user: 'root',
    pass: 'example'
});

conn.on('open', function(){
    console.log('MongoDB Open');
});

conn.on('disconnected', function(){
    console.log('MongoDB Disconnect');
});

module.exports = conn;