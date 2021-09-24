const express=require('express')
const router = express.Router();

const loginController=require('../controllers/loginController')

router.get('/login-user',loginController.pocetnaLoginUser)
router.post('/login-user/user',loginController.getUserData)

router.get('/login-admin',loginController.pocetnaLoginAdmin)
router.post('/login-admin/admin',loginController.getAdminData)

module.exports = router;