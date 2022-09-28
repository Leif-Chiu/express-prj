const redis = require('redis');
const client = redis.createClient({
    url: 'redis://default:secret_redis@192.168.1.113:6379'
});

// client.connect();
const cache = {
    connect: function(){
        client.connect();
    },
    close: function(){
        client.disconnect();
    },
    cget: function(key) {
        const v = client.get(key);
        return  v;
    },
    cset: function(key, value) {
        client.set(key, value);
        return {key: key, value: value};
    }
};

module.exports = cache;