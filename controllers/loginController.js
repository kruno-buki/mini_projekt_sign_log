const zaBazu = require('../models/komandeBaza')

module.exports = {
    pocetnaLogin: (req, res) => {
        res.render('login', {
            title: 'prijava u sustav --> GOTOVO'
        })
    },

    getUserData: (req, res) => {
        
        //provjera maila i provjera šifre
        let mail=req.body.mail
        let pass=req.body.password
        
        
        // ! PROMISE
        const myPromise=new Promise((resolve,reject)=>{
        
            const check=(data)=>{
                
                if(data==undefined){         
                    console.log('J!!! UNDEFINED');            
                    reject('Unešeni podaci su nevaljani')
                }
                if(data!=undefined){
                    console.log('NIJE UNDEFINED');   
                     resolve(data)
                }
               
            }
           zaBazu.akreditacija(check,mail,pass)           
        })
        myPromise.then((data)=>{
            console.log(data);
            res.render('user',{data:data})
        })
        .catch((err)=>{
            console.log(err);
            
            res.redirect('back') //ili login
        })
        
       
    }
}