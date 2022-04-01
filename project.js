function myFunction() {
    var voornaam = document.getElementById("voornaam");
    var naam = document.getElementById("naam");
    var gebruikersnaam = document.getElementById("gebruikersnaam");
    var exampleInputEmail1 = document.getElementById("exampleInputEmail1");
    var wachtwoord = document.getElementById("wachtwoord");
    var herhaalwachtwoord = document.getElementById("herhaalwachtwoord");
    var provincie = document.getElementById("provincie");
    var postcode = document.getElementById("postcode");
    var flexCheckDefault1 = document.getElementById("flexCheckDefault1");
    var flexCheckDefault2 = document.getElementById("flexCheckDefault2");
    var flexRadioDefault1 = document.getElementById("flexRadioDefault1");
    var flexRadioDefault2 = document.getElementById("flexRadioDefault2");
    var flexRadioDefault3 = document.getElementById("flexRadioDefault3");
    var flexRadioDefault4 = document.getElementById("flexRadioDefault4");


    
    let msg="";  
          
    if(!voornaam.value) { // or checked
      msg += "voornaam is null \n";
    }
    if(!naam.value) { // or checked
        msg += "naam is null \n";
      }
      if(!gebruikersnaam.value) { // or checked
        msg += "gebruikersnaam is null \n";
      }
      if(!exampleInputEmail1.value) { // or checked
        msg += "exampleInputEmail1 is null \n";
      }
      if(!wachtwoord.value) { // or checked
        msg += "wachtwoord is null \n";
      }
      if(!herhaalwachtwoord.value) { // or checked
        msg += "herhaalwachtwoord is null \n";
      }
      if(!provincie.value) { // or checked
        msg += "provincie is null \n";
      }
      if(!postcode.value) { // or checked
        msg += "postcode is null \n";
      }
      if(!flexCheckDefault1.value) { // or checked
        msg += "flexCheckDefault1 is null \n";
      }
      if(!flexCheckDefault2.value) { // or checked
        msg += "flexCheckDefault2 is null \n";
      }
      if(!flexRadioDefault1.value) { // or checked
        msg += "flexRadioDefault1 is null \n";
      }
    
    if(!flexRadioDefault2.value){
      msg += "flexRadioDefault2 is null \n";
    }
    
    if(!flexRadioDefault3.value){
      msg += "flexRadioDefault3 is null \n";
    }
    if(!flexRadioDefault4.value){
        msg += "flexRadioDefault4 is null \n";
      }
    alert(msg);
  }