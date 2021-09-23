const korisnik = require('./user')
const zaBazu = require('../models/komandeBaza')


module.exports = {
    pocetnaSign: (req, res) => {

        res.render('sign', {
            title: 'upis u sustav'
        })
    },

    upisiNovogKorisnika: (req, res) => {
        const ime = req.body.ime
        const prezime = req.body.prezime
        const email = req.body.email
        const telefon = req.body.telefon
        const dob = req.body.dob
        const grad = req.body.grad
        const password1 = req.body.password1
        const password2 = req.body.password2
        const oporavak = req.body.oporavakPass
        const admin = false

        // const noviClan = new korisnik.Korisnik(ime, prezime, email, telefon, dob, grad, admin, password1, password2, oporavak)
        const noviClan = new korisnik.Korisnik(ime, prezime, email, telefon, dob, grad, admin)
        // console.log('ISPIS: '+Object.entries(noviClan));
        const podaciZaBazu = [...Object.values(noviClan)];

        function provjeraSifre() {
            if (password1 !== password2) {
                console.log('Lozinke se ne podudaraju');
                return false
            }
            if (password1.length <= 3) {
                console.log('Lozinka je prekratka!');
                return false
            }
            if (oporavak == undefined) {
                console.log('Unesi neki pojam za oporavak!');
                return false
            }

            return true
        }

        let provjeraMaila = zaBazu.checkMail(noviClan.email)

        // !PROMISE

        const myPromise = new Promise(function (res, rej) {
            if (provjeraSifre() === false) {
                console.log('Lozinka je prekratka');
                rej()
            } else {
                console.log('Lozinka je OK!');
                res()
            }
        })

        myPromise.then(() => {
                // zaBazu.kreirajNovogKorisnika(value)
                console.log('Šifra je ok');
            })
            .then(() => {
                if (!provjeraMaila) {
                    zaBazu.kreirajNovogKorisnika(podaciZaBazu)
                }
            })
            .then(() => {
                zaBazu.dohvatiIdKorisnik((id)=>{
                    zaBazu.unosNoveLozinke(password1, oporavak, id)
                },email)
                
            })
            .then(() => res.render('index', {
                title: 'upisano u sustav'
            }))
            .catch(err => {
                console.log(err);
                res.render('error', {
                    poruka: 'Korisnik postoji'
                })
            })

    }

}