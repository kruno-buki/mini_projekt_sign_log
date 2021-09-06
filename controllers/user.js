  
  class Korisnik{
  
      constructor(ime, prezime, email, brojTelefona, datumRodenja, grad,administrator){
          this.ime=ime
          this.prezime=prezime
          this.email=email
          this.brojTelefona=brojTelefona
          this.datumRodenja=datumRodenja
          this.grad=grad
          this.administrator=administrator
      }
  
      consoleInfo(){
          return 'Ovo je: ' + this.ime +' '+ this.prezime;
      }
  
  }
  
  class Admin extends Korisnik{
 
      constructor(ime, prezime, email, brojTelefona, datumRodenja, grad, administrator){
          super(ime, prezime, email,brojTelefona,datumRodenja,grad)
          this.administrator=administrator
  
          super.consoleInfo()
      }      
      
  }
  
  
    
  module.exports={Korisnik, Admin}