const User = require('../models/user');

const list = async function(req, res){
    let id = req.params.id || null;

    if(!id) {
        let users = await User.find({});
        return res.json(users);
    } else {
        let user = await User.find({'id': id});
        return res.json(user);
    }

}

const create = async function(req, res) {
    try {
        let {id, name, email, password} = req.body;

        console.log(name);
        await User.create({
            id: req.body.id,
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        });
        let u =  await User.find({id: req.body.id});
        return res.json(u);
    } catch (error) {
        console.log(error)
        return res.json(error);
    }
}

const update = async function(req, res) {
    let id = req.params.id;
    let {name, email, password} = req.body;
    let u =  await User.find({id: id});
    console.log(u);
    if(u.length === 0){
        console.log('ohoh');
        return res.status(404).json({'error': 'Not Found'})
    } else {
        let u = await User.updateOne({
            id: id
        },{
            name: name,
            email: email,
            password: password,
            createdate: Date.now()
        });
        console.log(u);
        return res.json({status: 'ok'});
    }
}

const remove = async function(req, res) {
    let id = req.params.id;

    await User.deleteOne({id: id});
    return res.json({status: 'ok'});

}

module.exports = {
    list,
    create,
    update,
    remove
}
