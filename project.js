function myFunction() {
    var voornaam = document.getElementById("voornaam");
    var naam = document.getElementById("naam");
    var gebruikersnaam = document.getElementById("gebruikersnaam");
    var exampleInputEmail1 = document.getElementById("exampleInputEmail1");
    var wachtwoord = document.getElementById("wachtwoord");
    var herhaalwachtwoord = document.getElementById("herhaalwachtwoord");
    var adres = document.getElementById("adres");
    var land = document.getElementById("land");
    var flexCheckDefault2 = document.getElementById("flexCheckDefault2");
    var postcode = document.getElementById("postcode");
    var provincie = document.getElementById("provincie");


    
    let msg="";  
          
    if(!voornaam.value) { // or checked
      msg += "Het veld voornaam is vereist. \n";
    }
    if(!naam.value) { // or checked
        msg += "Het veld naam is vereist. \n";
      }
      if(!gebruikersnaam.value) { // or checked
        msg += "Het veld gebruikersnaam is vereist. \n";
      }
      if(!exampleInputEmail1.value) { // or checked
        msg += "Het veld email is vereist. \n";
      }
      if(!wachtwoord.value) { // or checked
        msg += "Het veld wachtwoord is vereist. \n";
      }
      if(!herhaalwachtwoord.value) { // or checked
        msg += "Het veld herhaal wachtwoord is vereist. \n";
      }
      if(!adres.value) { // or checked
        msg += "Adres is vereist. \n";
      }
      // if(!land.value) { // or checked
      //   msg += "Land is vereist. \n";
      // }
      // if(!provincie.value) { // or checked
      //   msg += "Provincie is vereist. \n";
      // }
      // if(!postcode.value) { // or checked
      //   msg += "Postcode is vereist. \n";
      // }
      if(!flexCheckDefault2.value) { // or checked
        msg += "Je moet de algemene voorwaarden accepteren. \n";
      }
      
    alert(msg);
  }