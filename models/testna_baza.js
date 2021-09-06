const db = require('../database')

import {db} from '../database'

const selectKorisnik= function (/*callback,*/ email='email') {

    const sql = 'SELECT * from korisnik where email=?'

    db.query(sql, email, function (err, data) {
        if (err)
            throw err;

        console.log(data);
        // return callback(data[0]) //ok ovako..

    })
}

selectKorisnik('mail')