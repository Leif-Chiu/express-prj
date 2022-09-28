const express = require('express');
const router = express.Router();
const axios = require('axios');
const cache = require('../cache/redis');

const instance = axios.create({
    baseURL: 'http://192.168.1.113/datamart',
});

router.get('/login', async function(req, res, next){
    const auth = await instance.post('/auth/login',{
        pid: '0070',
        password: '0070'
    });
    await cache.connect();
    const tk = await cache.cget('token');
    console.log(tk);
    const rst = await cache.cset('token', auth.data.access_token);

    return res.send('respond with a resource');
});

module.exports = router;
