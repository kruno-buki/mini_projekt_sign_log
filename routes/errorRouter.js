const express=require('express')
const router=express.Router()

// const adminController=require('../controllers/adminController')

router.get('/', (req,res)=>{
    res.render('error')
})



module.exports = router;