var express = require('express');
var router = express.Router();
const userRepo = require('../repositories/userRepo');
const {list, create, update, remove} = require('../controllers/userController');


router.get('/:id?', list);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);
/* GET users listing. */
// router.get('/:id?', function(req, res, next) {
//   console.log(req.params);
//   console.log(req.query);
//   res.send('respond with a resource');
// });

// router.post('/', async function(req, res, next){
//   console.log(req.body.pid)
//   return res.send('respond with a resource');
//   // userRepo.create({
//   //   id: '0070',
//   //   name: 'leif',
//   //   password: '0070',
//   //   email: 'leifchiu@playnitride.com'
//   // });
// });

module.exports = router;
