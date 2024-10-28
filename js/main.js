let ul = document.querySelector('nav .ul');

function openMenu() {
    ul.classList.add('open');
}

function closeMenu() {
    ul.classList.remove('open');
}

var msgCookies = document.getElementById('cookies-msg')


function aceito(){
    localStorage.lgpd = "sim"
    msgCookies.classList.remove('mostrar')
}
if (localStorage.lgpd == 'sim') {
    msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}

