// Enviar dados pelo whatsapp

function sendwhatsapp(){
    var phonenumber = "+244947875307";

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var country = document.querySelector(".country").value;
    var message = document.querySelector(".message").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Nome :* "+name+"%0a"
    +"*E-mail :* "+email+"%0a"
    +"*Assunto:* "+country+"%0a"
    +"*Mensagem :* "+message
    +"%0a%0a"
    +"Responderemos a sua menssagem o mais rápido possivel, obrigado por nos contactar";

    window.open(url, '_blank').focus();
  }
