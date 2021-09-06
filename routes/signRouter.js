const express=require('express')
const router = express.Router();

const signController=require('../controllers/signControllers')

router.get('/',signController.pocetnaSign)

router.post('/',signController.upisiNovogKorisnika)

module.exports = router;