var express = require('express');
var router = express.Router();

const pocetnaController=require('../controllers/pocetnaController')


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', pocetnaController.ucitavanjeHome);



module.exports = router;
