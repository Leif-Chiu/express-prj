const mongoose = require('mongoose');
const User = require('../models/user');

const repo = {
    create: async function(params){
        let user = new User({
            id: params.id,
            name: params.name,
            password: params.password,
            email: params.email
        });

        await user.save();
    }
};

module.exports = repo;