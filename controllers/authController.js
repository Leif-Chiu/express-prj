const User = require('../models/user');


const register = function(req, res) {
    let {id, name, email, password} = req.body;

    User.register({
        id, name, email, password
    }, password, async function(err, user){
        if(err) {
            return res.status(404).json(err);
        }
        const authenticate = User.authenticate();
        try {
            authenticate(id, password, function(err, result){
                if(err){
                    return res.status(404).json(err);
                }
                return res.json({'sttus': result});
            })
            // const {user} = await authenticate(id, 'aa');
            // return res.redirect(`/users/${user.id}`);
            // return res.json(user);
        } catch (err) {
            return res.status(404).json(err);
        }
    });
}

const login = function(req, res){

}

const logout = function(req, res){

}

module.exports = {
    login,
    logout,
    register
}
