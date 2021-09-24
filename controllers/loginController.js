const zaBazu = require('../models/komandeBaza')

module.exports = {
    pocetnaLoginUser: (req, res) => {
        res.render('login-user', {
            title: 'Provjera akreditacije za korisnika'
        })
    },

    getUserData: (req, res) => {

        //provjera maila i provjera šifre
        let mail = req.body.mail
        let pass = req.body.password


        // ! PROMISE
        const myPromise = new Promise((resolve, reject) => {

            const check = (data) => {
                if (data == undefined) {
                    console.log('J!!! UNDEFINED');
                    reject('Unešeni podaci su nevaljani')
                }
                if (data != undefined) {
                    console.log('NIJE UNDEFINED');
                    resolve(data)
                }
            }
            zaBazu.akreditacija(check, mail, pass)
        })
        myPromise.then((data) => {
                console.log(data);
                res.render('user', {
                    data: data
                })
            })
            .catch((err) => {
                console.log(err);

                res.redirect('back') //ili login-user
            })


    },
    pocetnaLoginAdmin: (req, res) => {
        res.render('login-admin', {
            title: 'Provjera akreditacije za administratora'
        })
    },
    getAdminData: function (req, res) {
        //provjera maila i provjera šifre
        let mail = req.body.mail
        let pass = req.body.password

        // ! PROMISE
        const myPromise1 = new Promise((resolve, reject) => {
            //callback...argument
            const check = (data) => {
                if (data == undefined) {
                    reject('Unešeni podaci su nevaljani')
                }
                if (data != undefined) {
                    resolve(data)
                }
            }

            zaBazu.akreditacija(check, mail, pass)
        })
        const myPromise2 = new Promise((resolve, reject) => {
            zaBazu.selectAllUsers(function (dataU) {
                console.log('myPromise2 iz baze: ', dataU);
                resolve(dataU)
            })
        })


        Promise.all([myPromise1, myPromise2])
            .then((data) => {
                
                let [dataAdmin, dataUsers] = data
                console.log(dataAdmin);
                console.log(dataUsers);
                res.render('admin', {
                    dataAdmin: dataAdmin,
                    dataUsers: dataUsers
                })
            })
            .catch((err) => {
                console.log(err);
                res.redirect('back') //ili login
            })
        // myPromise
        // .then((dataA)=>{
        //     let dataU
        //     zaBazu.selectAllUsers(function (dataU){
        //         console.log('DATA iz baze: ',dataU);
        //         console.log('NIZ: ', [dataA,dataU]);

        //     })   
        //        return [dataA,dataU]       
        // })
        // .then((data)=>{
        //     console.log('SVI KORISNICI:',data);
        //     let [dataAdmin,dataUsers]=data
        //     res.render('admin',{dataAdmin:dataAdmin,dataUsers:dataUsers})
        // })
        // .catch((err)=>{
        //     console.log(err);
        //     res.redirect('back') //ili login
        // })

        // myPromise.then((data)=>{
        //     console.log(data);
        //     res.render('admin',{data:data})
        // })
        // .catch((err)=>{
        //     console.log(err);

        //     res.redirect('back') //ili login
        // })


    }
}