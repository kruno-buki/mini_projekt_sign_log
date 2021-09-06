const mysql=require ('mysql2')

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projekt_autentifikacija'
})

db.connect((err)=>{
    if(err) throw err;
    console.log('SPOJEN SA BAZOM');
})

module.exports=db