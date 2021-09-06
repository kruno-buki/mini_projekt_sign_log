const { connect } = require('../database.js');
const db = require('../database.js')

module.exports={
    //!kreiranje novog korisnika
    kreirajNovogKorisnika: function (podaci){
        console.log('> KREIRAM NOVOG KORISNIKA!!!');
        console.log('PODATKE KOJE SAM DOBIO SU: ')
        console.log(podaci);
        
        let [ime,prezime,email,brojTelefona,datumRodenja,grad,administrator]=podaci

        
        let sql = 'INSERT INTO korisnik( ime, prezime, email, brojTelefona, datumRodenja, grad, administrator) VALUES (?,?,?,?,?,?,?)';
        
        // connection.query(ime,prezime,email, brojTelefona, datumRodenja,grad,administrator)


        db.query(sql,[ime,prezime,email, brojTelefona, datumRodenja,grad,administrator], (err, data) => {
            if (err)
                throw err
            console.log('Uspješno si uplodao tablicu KUPAC -> broj zapisa: ' + data.affectedRows);
            // return
        })
        // return 
    },
    unosNoveLozinke:function(...podaci){
        let [password1,oporavak,id]=podaci
        let sql = 'INSERT INTO zaporke( sifra, recoverySifra, korisnikID) VALUES (?,?,?)';
        db.query(sql, [password1,oporavak,id], function (err, data) {
            if (err)
                throw err;
        })
        console.log('PODACI ZA LOZINKE: ',password1, oporavak,id);
        // return;
    },
    checkMail:function(email){
        const sql = 'SELECT email from korisnik where email=?'
        db.query(sql,email,(err,data)=>{
            if(err){
                console.log('KOMANDA KAŽE: nema takvog korisnika');
                throw err;
            }
            
            console.log(data);
            return false
        })
    },

    dohvatiIdKorisnik:function(callback,email){
        console.log(email);
        const sql='SELECT korisnikID FROM korisnik WHERE email=?'
        db.query(sql, email, function (err, data) {
            if (err)
                throw err;

            let returnData=data[0].korisnikID
            console.log(returnData);
            callback( returnData)
            // return data  ...NE TAKO
    })
},

    // selectSviKorisnici: function ( /*callback,*/) {

    //     const sql = 'SELECT * from korisnik'

    //     db.query(sql, email, function (err, data) {
    //         if (err)
    //             throw err;
            	
    //         console.log(data);
    //         // return callback(data[0]) //ok ovako..

    //     })
    // },

    // checkPass:function(pass){
    //     const sql = 'SELECT sifra from zaporke where sifra=?'
    //     db.query(sql,(err,data)=>{
    //         if(err){
    //             throw err;
    //         }
            
    //         console.log(data);
    //     })
    // },
    


    // selectKorisnik:function(email){
    //     const sql = 'SELECT email from korisnik where email=?'
    //     db.query(sql,(err,data)=>{
    //         if(err){
    //             throw err;
    //         }
            
    //         console.log(data);
    //     })
    // },
    // izmjenaPodataka:function(podaci, id){
    //     const update="UPDATE korisnik SET email=? WHERE korisnikID=? "
    //     db.query(sql,(err,data)=>{
    //         if(err){
    //             throw err;
    //         }
            
    //         console.log(data);
    //     })
    // },
    // izmjenaSifre:function (novaSifra,staraSifra){
       
    //     const provjeraSifre="UPDATE zaporka SET zaporka.sifra=?  where staraSifra=? "
    //     db.query(sql,(err,data)=>{
    //         if(err){
    //             throw err;
    //         }
            
    //         console.log(data);
    //     })
    // },


    // brisanjeKorisnik:function(id){
    //     let sql="DELETE FROM korisnik WHERE korisnikID=? ";

    //     db.query(sql, (err, data) => {
    //         if (err)
    //             throw err
    //         if(sql){
    //         console.log('kosrisnik je obrisan');
            
    //     }
    //     console.log('korisnik nije obrisan');

    //     })
    // }


}